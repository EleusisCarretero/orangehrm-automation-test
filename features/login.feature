Feature: OrangeHRM Login

  Scenario: Login with valid credentials
    Given the user open the main web page OrangeHRM
    When enters the "<username>" in the username field
    And enters "<password>" in the password field
    And presses the "Login" button
    Then the admin dashboard must be shown

    Examples:
      | username | password |
      | Admin    | admin123 |
  
  Scenario: Login with invalid credentials
    Given the user open the main web page OrangeHRM
    When enters the "<username>" in the username field
    And enters "<password>" in the password field
    And presses the "Login" button
    Then the login must be denied 

    Examples:
      | username | password |
      | Pedrito | melectrocutaste |
      | Erle93  | pass3ed         |
      | Ztro    | cont_123423     |

