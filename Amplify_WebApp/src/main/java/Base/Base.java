package Base;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Base {

	public static WebDriver driver;
	 
		
	public void launchURL(String url){
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver=new ChromeDriver();

	    driver.get(url);
	    driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}

}
