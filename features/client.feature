@Client

Feature: Buying products from stock

  Background:
    Given A stock having
      | name     | items | price |
      | Tomatoes | 20    | 2     |
      | Bananas  | 5     | 1     |
    And User in session is Client

  Scenario Outline: Client buy Product
    Given User will give <avaliableMoney>$ to pay
    When User buy <quantity> units of <product>
    Then Stock contains <stockQuantity> units of <product>
    And User should receive <change>$ as change

    Examples:
    | avaliableMoney | quantity | product  | stockQuantity | change |
    | 20             | 4        | Tomatoes | 16            | 12     |
    | 10             | 4        | Bananas  | 1             | 6      |
