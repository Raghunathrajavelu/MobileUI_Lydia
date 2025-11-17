Feature: Wikipedia App Automation

  Scenario: Search for Lydia and change language
    Given the Wikipedia app is launched
    When I complete onboarding
    And I search for "Lydia"
    And I scroll and select the city "Lydia" and dismiss popup
    Then I change the website language to "French"
