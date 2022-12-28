from robocop.checkers import VisitorChecker
from robocop.rules import Rule, RuleSeverity
from robot.api import Token

rules = {
    "5001": Rule(
        rule_id="5001",
        name="circular-call-in-keyword",
        msg="There is a circular call in the keyword: {{ keyword }}",
        severity=RuleSeverity.WARNING
    )
}


class CircularCallChecker(VisitorChecker):
    reports = ("circular-call-in-keyword",)

    def __init__(self):
        super().__init__()
        self.run_keyword_keywords = [
            "run keyword",
            "run keyword and continue on failure",
            "run keyword and expect error",
            "run keyword and ignore error",
            "run keyword and return",
            "run keyword and return if",
            "run keyword and return status",
            "run keyword and warn on failure",
            "run keyword if",
            "run keyword if all tests passed",
            "run keyword if any tests failed",
            "run keyword if test failed",
            "run keyword if test passed",
            "run keyword if timeout occurred",
            "run keyword unless",
            "run keywords",
            "wait until keyword succeeds"
        ]
        self.current_keyword = None

    def visit_TestCase(self, node):  # noqa
        pass

    def visit_Keyword(self, node):
        self.current_keyword = node.name
        self.generic_visit(node)

    def visit_KeywordCall(self, node):
        if str(node.keyword).lower() == self.current_keyword.lower():
            self.report(
                "circular-call-in-keyword",
                node=node,
                keyword=self.current_keyword,
                col=0
            )
        elif str(node.keyword).lower() in self.run_keyword_keywords:
            for arg in node.get_tokens(Token.ARGUMENT):
                if str(arg) == self.current_keyword:
                    self.report(
                        "circular-call-in-keyword",
                        node=node,
                        keyword=self.current_keyword,
                        col=0
                    )

