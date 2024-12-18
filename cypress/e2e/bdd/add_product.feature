Feature: Product addition

Background: Add the product in the cart
    Given I visit the main page
    And I search for product "IBUPROFEN AL 400 mg"
    And I add the product to the cart

Scenario: Check if the product is added
    Then the product is successfully added to the cart

Scenario: Product details are shown in cart page
    When I visit the cart page
    Then the product info is show in the cart 
    
Scenario: Product quantity can be selected
    Given I visit the cart page
    When I select the product quantity as 2
    And I wait for 5 seconds
    Then the quantity of the products in the cart is shown as 2
