Feature: Google Search

  Scenario: Searching for chat gpt on Google
    Given I open Google page
    When I search for "chat gpt"
    Then I see "chat gpt" in the results