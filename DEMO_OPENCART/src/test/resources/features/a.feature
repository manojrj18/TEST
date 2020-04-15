
     Feature: opencart

@TC01
Scenario: Login with invalid credentials
Given user is not logged in and is on the login page
When user enters invalid username
And user enters invalid password
And user clicks login button
Then a warning message is displayed

@TC02
Scenario: Login with valid credentials
Given user is on the login page
When user enters valid username
And user enters valid password
And user clicks login button to login
Then  account page is displayed

@TC03
Scenario: search for a product and add product to the cart
Given user is on account page to do a search
When user searches for a product
And user gives required details in product page
And user clicks add to cart
Then selected product is added to cart

@TC04
Scenario: checkout product
Given A product is added to cart
And user proceeds to checkout page
When user enters delivery details
And user selects the payment method
And user clicks confirm order
Then product order is placed

@TC05
Scenario: change mobile number linked to acccount
Given user is on account page and wants to change mobile number
And user navigates to my account page to change mobile number
When user clicks on edit account
And user enters valid mobile number in edit box
And user clicks continue to change mobile number
Then mobile number is changed

@TC06
Scenario: change currency type
Given user is on account page and wants to change currency type
When user chooses the required curency in dropdown box
Then required currency is selected

@TC07
Scenario: logout
Given user is on account page
When user clicks my account
And user clicks logout
And user clicks continue
Then user is logged out of his account

