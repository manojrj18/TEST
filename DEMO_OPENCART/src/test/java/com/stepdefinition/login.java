package com.stepdefinition;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import com.pages.homepage;
import com.pages.loginpage;
import com.seleniumutil.seleniumutility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login {
	 WebDriver driver;
	 loginpage login;
	 homepage  home;
	 seleniumutility util;
	

	 @Given("^user is on the login page$")
	 public void user_is_on_the_login_page() throws Throwable {
		 System.setProperty("webdriver.firefox.driver","geckodriver.exe");
			driver=new FirefoxDriver();
	 
//	 System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
//	 driver = new ChromeDriver();
	 driver.get("https://demo.opencart.com/");
	 driver.manage().window().maximize();
	 home=new homepage(driver);
	 home.DEMO_OPENCART_Myaccount();
	   home.DEMO_OPENCART_Login_option();
	 }

	 @When("^user enters valid username$")
	 public void user_enters_valid_username() throws Throwable {
	  login = new loginpage(driver);
	  login.enter_emailid("manojrj18@gmail.com");
	
	 }

	 @When("^user enters valid password$")
	 public void user_enters_valid_password() throws Throwable {
	 login = new loginpage(driver);
	 login.enter_password("manojmanu");
   
	 }

	 @When("^user clicks login button to login$")
	 public void user_clicks_login_button_to_login() throws Throwable {
	 login = new loginpage(driver);
	  login.click_loginbtn();
	    
	 }

	 @Then("^account page is displayed$")
	 public void account_page_is_displayed() throws Throwable {
	 util = new seleniumutility(driver);
	 util.takeSnapShot("F:\\Eclipse workspace\\DEMO_OPENCART\\src\\test\\resources\\screenshots\\myacc.png");
	  
	 }

	 }




