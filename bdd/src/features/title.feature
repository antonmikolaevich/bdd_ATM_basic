Feature: Page titles from the menu

@critical
  Scenario: Checking page titles from the menu
    Given I open "<url>" page from the menu
    Then Page title should "contain" "<expectedTitle>"

Examples: 
| url                           | expectedTitle |
| https://www.epam.com/about    | About|
| https://www.epam.com/careers  | Careers |
