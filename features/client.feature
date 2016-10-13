Feature: Buying products from stock

  Scenario: Client buy Tomatoes
    Given The stock has 20 units of Tomatoes, item price 2$
    And User in session is Client
    And User will give 20$ to pay
    When User buy 4 units of Tomatoes
    Then The stock should have 12 units of Tomatoes
    And User should receive 2$ as change

  Scenario: Client buy Bananas
    Given The stock has 5 units of Bananas, item price 1$
    And User in session is Client
    And User will give 10$ to pay
    When User buy 4 units of Bananas
    Then The stock should have 1 units of Bananas
    And User should receive 6$ as change