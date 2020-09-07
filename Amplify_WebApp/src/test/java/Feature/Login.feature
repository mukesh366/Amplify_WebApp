Feature: Amplify Website Test


Scenario Outline: Amplify Pro – Selenium Automation Test case


Given Navigate to "<URL>"
When Dismiss any Cookie dialogs
And Click the login button
Then Enter Valid "<username>" and password "<password>"
Then Press the login button 
And Validate arrival at the Welcome Page


Examples:
|URL                          |username                     |password          |
|https://test.amplifypro.life |mukesh.maurya5423@gmail.com	|Mukesh111*        |

