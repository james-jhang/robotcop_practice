import unittest
import robocop

class TestCircularCallChecker(unittest.TestCase):

    def setUp(self):
        config = robocop.Config(root='./fixture')
        config.include = {'5001'}
        config.ext_rules = set(['../CircularCallChecker.py'])
        config.filetypes = ['.robot', '.txt']
        self.robocop_runner = robocop.Robocop(config=config)
        self.robocop_runner.reload_config()

    def test_call_self_directly(self):
        ws = self.robocop_runner.run()
        self.assertEqual(
            ws[0],
            {'source': 'C:\\Users\\Lab1321\\Desktop\\Projects\\Robot Framework\\robotcop_practice\\tests\\CircularCallChecker\\fixture\\test.robot', 'line': 17, 'column': 0, 'severity': 'W', 'rule_id': '5001', 'description': 'There is a circular call in the keyword: Call self directly', 'rule_name': 'circular-call-in-keyword'}
        )
        print(ws[0])

    def test_2(self):
        assert True

if __name__ == '__main__':
    unittest.main()