package com.stepdefinition;
import static org.testng.Assert.assertEquals;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.baseclass.library;
import com.pages.accountpage;
import com.pages.enquirypage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class enquiry extends  library{
	WebDriver driver;
	accountpage ap;
	enquirypage ep;
	
	@Given("^user is on account page to enquire$")
	public void user_is_on_account_page_to_enquire() throws Throwable {
		launch_browser("chrome","https://demo.opencart.com/");
	}

	@Given("^user clicks contact us$")
	public void user_clicks_contact_us() throws Throwable {
       ap = new accountpage(driver);
       ap.contactus();
	}

	@When("^user enters queries$")
	public void user_enters_queries() throws Throwable {
         ep = new enquirypage(driver);
         ep.enter_enq("about my order");

	}

	@When("^user clicks submit$")
	public void user_clicks_submit() throws Throwable {
		 ep = new enquirypage(driver);
        ep.click_enquirysubmit();
	}

	@Then("^query is submitted$")
	public void query_is_submitted() throws Throwable {
		String acctualdisplay = driver.findElement(By.xpath("//*[@id=\"content\"]/h1")).getText();
	       String expecteddispaly="Contact Us";
	       assertEquals(acctualdisplay,expecteddispaly);
	    	   {
	 		  	  System.out.println("enquiry is done");
	 		   } 

	}

}


