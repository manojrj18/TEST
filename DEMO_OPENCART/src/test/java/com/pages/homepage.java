package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class homepage {
	WebDriver driver;

	By Myaccount = By.xpath("/html/body/nav/div/div[2]/ul/li[2]/a/span[1]");
	By Login_option = By.xpath("/html/body/nav/div/div[2]/ul/li[2]/ul/li[2]/a");

	public homepage(WebDriver driver)
	{
	  this.driver=driver;

	}
	//click the My account option

	public void DEMO_OPENCART_Myaccount(){
	driver.findElement(Myaccount).click();
	}

	//click the Login option

	public void DEMO_OPENCART_Login_option() {
	driver.findElement(Login_option).click();
	}

}
