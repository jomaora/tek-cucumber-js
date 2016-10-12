Feature: Stock management
  It can be only access by admin user

  Scenario: Admin adds new product to the stock
    Given User in session is Admin
    When he add 5 units of Tomatoes, item price: 3.5$
    Then Stock is not empty
    And Stock contains 5 units of Tomatoes