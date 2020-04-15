$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/a.feature");
formatter.feature({
  "line": 2,
  "name": "opencart",
  "description": "",
  "id": "opencart",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#"
    },
    {
      "line": 4,
      "value": "#@TC01"
    },
    {
      "line": 5,
      "value": "#Scenario: Login with invalid credentials"
    },
    {
      "line": 6,
      "value": "#Given user is not logged in and is on the login page"
    },
    {
      "line": 7,
      "value": "#When user enters invalid username"
    },
    {
      "line": 8,
      "value": "#And user enters invalid password"
    },
    {
      "line": 9,
      "value": "#And user clicks login button"
    },
    {
      "line": 10,
      "value": "#Then a warning message is displayed"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#@TC02"
    },
    {
      "line": 13,
      "value": "#Scenario: Login with valid credentials"
    },
    {
      "line": 14,
      "value": "#Given user is on the login page"
    },
    {
      "line": 15,
      "value": "#When user enters valid username"
    },
    {
      "line": 16,
      "value": "#And user enters valid password"
    },
    {
      "line": 17,
      "value": "#And user clicks login button to login"
    },
    {
      "line": 18,
      "value": "#Then  account page is displayed"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#@TC03"
    },
    {
      "line": 21,
      "value": "#Scenario: search for a product and add product to the cart"
    },
    {
      "line": 22,
      "value": "#Given user is on account page to do a search"
    },
    {
      "line": 23,
      "value": "#When user searches for a product"
    },
    {
      "line": 24,
      "value": "#And user gives required details in product page"
    },
    {
      "line": 25,
      "value": "#And user clicks add to cart"
    },
    {
      "line": 26,
      "value": "#Then selected product is added to cart"
    }
  ],
  "line": 29,
  "name": "checkout product",
  "description": "",
  "id": "opencart;checkout-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TC04"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "A product is added to cart",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user proceeds to checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user enters delivery details",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user selects the payment method",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user clicks confirm order",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "product order is placed",
  "keyword": "Then "
});
formatter.match({
  "location": "checkout.a_product_is_added_to_cart()"
});
formatter.result({
  "duration": 37007137982,
  "status": "passed"
});
formatter.match({
  "location": "checkout.user_proceeds_to_checkout_page()"
});
formatter.result({
  "duration": 2481783292,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/div[2]/div/div/div[3]/div[2]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027MANOJ-PC\u0027, ip: \u0027192.168.43.236\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200403170909, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 9684, moz:profile: C:\\Users\\Manoj\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1ec6ed65-5271-4b83-8bda-614ebf71a530\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div/div/div[3]/div[2]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.pages.cartpage.click_checkout(cartpage.java:17)\r\n\tat com.stepdefinition.checkout.user_proceeds_to_checkout_page(checkout.java:45)\r\n\tat ✽.And user proceeds to checkout page(src/test/resources/features/a.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "checkout.user_enters_delivery_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkout.user_selects_the_payment_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkout.user_clicks_confirm_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkout.product_order_is_placed()"
});
formatter.result({
  "status": "skipped"
});
});