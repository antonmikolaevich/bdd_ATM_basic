Feature: Main

@smoke
Scenario: Main page should have "EPAM | Software Engineering & Product Development Services" title
Given I open "Main" page
Then Page title should be equal to "EPAM | Software Engineering & Product Development Services"