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

