Feature: Wikipedia Mobile App Test

  Scenario: Complete onboarding, search Lydia, switch language, and open Crésus page
  
    Given the user completes onboarding
    When the user searches for Lydia
    And the user dismisses the popup
    And the user changes the language to French
    Then the page should be translated to French
    When the user scrolls to Crésus and opens it in a new tab
    Then the Crésus page should be displayed
