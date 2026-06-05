Feature: Basic navigation to a system
  As a guest I want to login with basic auth and see that landing page rendered

  Scenario: Initial successful guest login
    Given I render web-page with basic auth
    When I click Guest Login
    Then I have to be redirected to Garage page