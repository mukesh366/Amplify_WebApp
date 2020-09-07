package StepDefinition;

import org.junit.Assert;

import Base.Base;
import PageObject.LoginPage;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends Base{




	public LoginPage loginpage;

	@Given("^Navigate to \"([^\"]*)\"$")
	public void navigate_to(String url) {
		launchURL(url);
	}

	@When("^Dismiss any Cookie dialogs$")
	public void dismiss_any_Cookie_dialogs()  {


		loginpage=new LoginPage();
		loginpage.handlecookies();
	}

	@When("^Click the login button$")
	public void click_the_login_button(){
		loginpage=new LoginPage();
		loginpage.clickOnLogin();
	}

	@Then("^Enter Valid \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_Valid_and_password(String user, String pass)  {
		loginpage=new LoginPage();
		loginpage.credentiale(user, pass);
	}


	@Then("^Press the login button$")
	public void press_the_login_button() {
		loginpage=new LoginPage();
		loginpage.submit();
	}

	@Then("^Validate arrival at the Welcome Page$")
	public void validate_arrival_at_the_Welcome_Page(){
		
	
		loginpage=new LoginPage();
		String actual=loginpage.ValidationMessage();
		
	 Assert.assertEquals("We are not home page","WELCOME MUKESH", actual);
			

	}




	@After
	public void teardown() throws InterruptedException {
		Thread.sleep(5000);
		driver.quit();
	}

}
