Feature: Order Validations

    # Background:


    @regression
    Scenario Outline: Verify user can place order successfully.
        Given Navigate to "<url>"
        Given Login to the application with "<username>" and "<password>"
        When Select "<product>" from dashboard
        Then Verify selected "<product>" is available on cart page
        When Enter the valid "<countryCode>" and "<countryName>" and place the order
        Then Verify order is present on order history page
        Examples:
            | url                                    | username                   | password   | product         | countryCode | countryName |
            | https://rahulshettyacademy.com/client/ | sunilpawar1506@outlook.com | Hawks@1234 | ADIDAS ORIGINAL | ind         | India       |

     @smoke
    Scenario Outline: Verify user can see product in cart.
        Given Navigate to "<url>"
        Given Login to the application with "<username>" and "<password>"
        When Select "<product>" from dashboard
        Then Verify selected "<product>" is available on cart page
        Examples:
            | url                                    | username                   | password   | product       |
            | https://rahulshettyacademy.com/client/ | sunilpawar1506@outlook.com | Hawks@1234 | iphone 13 pro |
