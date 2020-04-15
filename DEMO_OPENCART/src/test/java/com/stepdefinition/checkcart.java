package com.stepdefinition;
import static org.testng.Assert.assertEquals;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.baseclass.library;
import com.pages.accountpage;
import com.pages.cartpage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class checkcart extends library {
	WebDriver driver;
	accountpage ap;
	cartpage cp;
	
	@Given("^user is on account page and wants to check the cart$")
	public void user_is_on_account_page_and_wants_to_check_the_cart() throws Throwable {
		launch_browser("chrome","https://demo.opencart.com/");
	}

	@Given("^user navigates to cart page$")
	public void user_navigates_to_cart_page() throws Throwable {
      ap = new accountpage(driver);
      ap.shoppingcart();
	}

	@When("^user checks the product in the cart$")
	public void user_checks_the_product_in_the_cart() throws Throwable {
       cp = new cartpage(driver);
       String acctualproductincart = driver.findElement(By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[2]/a")).getText();
       String expectedproductincart="HP LP3065";
       assertEquals(acctualproductincart,expectedproductincart);
    	   {
 		  	  System.out.println("product is present in cart");
 		   } 
	}

	@Then("^confirms product is present or not$")
	public void confirms_product_is_present_or_not() throws Throwable {
		

	}

}
