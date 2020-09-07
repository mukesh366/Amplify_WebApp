$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Amplify Website Test",
  "description": "",
  "id": "amplify-website-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Amplify Pro – Selenium Automation Test case",
  "description": "",
  "id": "amplify-website-test;amplify-pro-–-selenium-automation-test-case",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Navigate to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Dismiss any Cookie dialogs",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Valid \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Press the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Validate arrival at the Welcome Page",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "amplify-website-test;amplify-pro-–-selenium-automation-test-case;",
  "rows": [
    {
      "cells": [
        "URL",
        "username",
        "password"
      ],
      "line": 16,
      "id": "amplify-website-test;amplify-pro-–-selenium-automation-test-case;;1"
    },
    {
      "cells": [
        "https://test.amplifypro.life",
        "mukesh.maurya5423@gmail.com",
        "Mukesh111*"
      ],
      "line": 17,
      "id": "amplify-website-test;amplify-pro-–-selenium-automation-test-case;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Amplify Pro – Selenium Automation Test case",
  "description": "",
  "id": "amplify-website-test;amplify-pro-–-selenium-automation-test-case;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Navigate to \"https://test.amplifypro.life\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Dismiss any Cookie dialogs",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter Valid \"mukesh.maurya5423@gmail.com\" and password \"Mukesh111*\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Press the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Validate arrival at the Welcome Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://test.amplifypro.life",
      "offset": 13
    }
  ],
  "location": "StepDefinition.navigate_to(String)"
});
formatter.result({
  "duration": 35022538700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.dismiss_any_Cookie_dialogs()"
});
formatter.result({
  "duration": 532656600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_the_login_button()"
});
formatter.result({
  "duration": 1066249900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukesh.maurya5423@gmail.com",
      "offset": 13
    },
    {
      "val": "Mukesh111*",
      "offset": 56
    }
  ],
  "location": "StepDefinition.enter_Valid_and_password(String,String)"
});
formatter.result({
  "duration": 824650500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.press_the_login_button()"
});
formatter.result({
  "duration": 172759300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validate_arrival_at_the_Welcome_Page()"
});
formatter.result({
  "duration": 3929564300,
  "status": "passed"
});
formatter.after({
  "duration": 6251463800,
  "status": "passed"
});
});