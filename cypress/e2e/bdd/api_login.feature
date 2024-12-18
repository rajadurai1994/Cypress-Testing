Feature: API Login

Scenario: Successful login with valid credentials
    Given I send a POST request with valid credentials
    Then I should get a 201 response status
    And I should get 'token' in response body

Scenario: Unsuccessful login with missing credentials
    Given I send a POST request with some missing credentials
    Then I should get a 400 response status
    And I should not get 'token' in response body
    And I should get error message 'Bad request' in response body

Scenario: Unsuccessful login with invalid credentials (Not mentioned in Swagger)
    Given I send a POST request with invalid credentials
    Then I should get a 403 response status
    And I should not get 'token' in response body
    And I should get error message 'Invalid credentials' in response body
