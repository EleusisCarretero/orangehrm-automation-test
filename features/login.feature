Feature: OrangeHRM Login

  @test1
  Scenario: Login with valid credentials
    Given the user open the main web page OrangeHRM
    When enters the "<username>" in the username field
    And enters "<password>" in the password field
    And presses the "Login" button
    Then the admin dashboard must be shown

    Examples:
      | username | password |
      | Admin    | admin123 |
  
  @test2
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
  
  @test3
  Scenario: Login empty credentials
    Given the user open the main web page OrangeHRM
    When enters the "<username>" in the username field
    And enters "<password>" in the password field
    And presses the "Login" button
    Then the crdentials must be asked

    Examples:
      | username | password |
      | Admin    |          |
      # |          | admin123 |
      # |          |          |


