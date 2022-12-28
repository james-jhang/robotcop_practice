import os
from robot.api import SuiteVisitor

class ModificationChecker(SuiteVisitor):

    def __init__(self, target, output):
        with open(target, 'r') as f:
            self.target_kws = f.read().splitlines()
            self.target_kws = list(map(str.lower, self.target_kws))
        self.modified_tests = []
        self.current_test = None
        self.current_suite = None
        self.test_has_been_added = False
        self.suite_having_target_kw = []
        self.at_least_one_test = None
        self.at_least_one_test_is_added = False
        self.root_suite = None
        self.output_dir = os.path.join(
            os.getcwd(), output, 'modified_tests.txt'
        )

    def start_suite(self, suite):
        if self.root_suite == None:
            self.root_suite = suite.name
        self.current_suite = suite.name

    def start_test(self, test):
        self.current_test = test.name
        self.test_has_been_added = False
        if self.suite_having_target_kw:
            self.at_least_one_test = self.current_test

    def end_test(self, test):
        self.current_test = None
        self.test_has_been_added = False

    def start_keyword(self, kw):
        if kw.kwname.lower() in self.target_kws:
            if self.current_test == None:
                self.suite_having_target_kw.append(self.current_suite)
            else:
                if not self.test_has_been_added:
                    self.modified_tests.append(self.current_test)
                    self.at_least_one_test_is_added = True
                    self.test_has_been_added = True

    def end_suite(self, suite):
        if suite.name == self.root_suite:
            print('All suites end.')
            if not self.modified_tests:
                print('No tests were modified.')
            else:
                print(f'Saving result to {self.output_dir}...')
                with open(self.output_dir, 'w') as f:
                    print(len(self.modified_tests))
                    for t in self.modified_tests:
                        f.write(t + '\n')
        else:
            if self.suite_having_target_kw:
                if suite.name == self.suite_having_target_kw[-1]:
                    if not self.at_least_one_test_is_added:
                        self.modified_tests.append(self.at_least_one_test)
                        self.at_least_one_test_is_added = False
                    self.suite_having_target_kw.pop()