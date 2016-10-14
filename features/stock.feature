@Stock

Feature: Stock management
  It can be only access by admin user

  Scenario: Admin adds new product to the stock
    Given User in session is Admin
    When he add 5 units of Tomatoes, item price: 3.5$
    Then Stock is not empty
    And Stock contains 5 units of Tomatoes

  Scenario: Client adds new product to the stock
    Given User in session is Client
    When he add 1 units of Bananas, item price: 1.0$
    Then Stock should not contain Bananas
    And An error Unauthorized should be thrown