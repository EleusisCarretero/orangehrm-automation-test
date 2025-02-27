feature: OrangeHRM Login

    Scenario: Login with valid credentials
    Given the user open the main web page OrangeHRM
    When enters the "Admin" in the "username" field
    And enters "admin123" in the "password" field
    And presses in the "Login" button
    Then the admin dhasboard must be shown
