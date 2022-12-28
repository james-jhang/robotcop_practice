*** Settings ***
Resource    keywords.txt
Library    myKeywords.py
Suite Setup       Call self directly
Suite Teardown    Call self directly

*** Test Cases ***
Test case X
    [Setup]    Call self directly
    Call self directly
    Call self in condition
    Call self in run keywords
    [Teardown]    Normal keyword

*** Keywords ***
Call self directly
    Call self directly

Call self in condition
    ${flag} =    Get Flag
    Run Keyword If    ${flag}    Call self in condition

Call self in run keywords
    Run Keywords    Step 1
    ...      AND    Step 2
    ...      AND    Call self in run keywords

Step 1
    Log    Step 1

Step 2
    Log    Step 2

Normal keyword
    Log    Normal keyword