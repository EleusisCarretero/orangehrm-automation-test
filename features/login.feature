Feature: OrangeHRM Login

  Scenario: Login with valid credentials
    Given the user open the main web page OrangeHRM
    When enters the "Admin" in the "username" field
    And enters "admin123" in the "password" field
    And presses the "Login" button
    Then the admin dashboard must be shown

