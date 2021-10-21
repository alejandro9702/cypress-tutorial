Feature: business branch terminal
As a user administrator of the business branch or business, i want to interact with the terminals
 
  @addTerminal
  Scenario: add a new terminal
    Given I open zunify panel and I logging
    When I add a new terminal 'terminal_automate'
    # Then I should see the "terminal_automate" listed