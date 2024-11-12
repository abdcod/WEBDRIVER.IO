@login
Feature: Login Functionality
  This feature tests the login functionality with valid and invalid credentials.

@positive
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with valid username <username> and password <password>
    Then I should be logged in successfully within 10 seconds

 Examples:

      | username                    | password        |
      | standard_user               | secret_sauce    |
      | problem_user                | secret_sauce    |
      | performance_glitch_user     | secret_sauce    |
      | error_user                  | secret_sauce    |
      | visual_user                 | secret_sauce    |

@negative
Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I login with invalid username <username> and password <password>
    Then I should see an error message saying <expectedMessage>

  Examples:
    | username                  | password             | expectedMessage                                                             |
    | invalid_user111           | wrong_password111    | "Epic sadface: Username and password do not match any user in this service" |
    | locked_out_user           | secret_sauce         | "Epic sadface: Sorry, this user has been locked out."                       |
    |                           | 123456               | "Epic sadface: Username is required"                                        |
    | random_user111            |                      | "Epic sadface: Password is required"                                        |
    |                           |                      | "Epic sadface: Username is required"                                        |

