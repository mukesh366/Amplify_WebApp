package PageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Base.Base;


public class LoginPage extends Base{
	

	
	
	public LoginPage() {
		super();
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//form[@id='cookies_form']/input")
	WebElement handlecookies;
	
	@FindBy(xpath="//div[@id='login_wrapper']//child::input")
	WebElement clickOnLogin;
	
	@FindBy(xpath="//form[@class='login_form']/input[@type='email']")
	WebElement username;
	
	@FindBy(xpath="//form[@class='login_form']/input[@type='password']")
	WebElement password;
	
	@FindBy(xpath="//form[@class='login_form']/input[@type='submit']")
	WebElement submit;
	
	@FindBy(xpath="//div[@id='welcome_message']/h1")
	WebElement ValidationMessage;
	
	
	
	public void handlecookies(){
		handlecookies.click();
	}
	public void clickOnLogin(){
		clickOnLogin.click();
	}
	public void credentiale(String user, String pass){
		
		username.sendKeys(user);
		password.sendKeys(pass);
	}
	public void submit(){
		submit.click();
	}
	public String ValidationMessage(){
		return ValidationMessage.getText();
	}

}
