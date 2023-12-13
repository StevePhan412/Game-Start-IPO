package groupGroupGroupGameStart;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.io.File;

public class SignupPasswordsNotMatch {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();
  JavascriptExecutor js;
  @Before
  public void setUp() throws Exception {
	  System.setProperty("webdriver.chrome.driver", //
    		  "lib\\win\\chromedriver.exe");
    driver = new ChromeDriver();
    baseUrl = "https://www.google.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    js = (JavascriptExecutor) driver;
  }

  @Test
  public void InvalidLogin() throws Exception {
    driver.get("http://localhost:5173/signup");
    driver.findElement(By.xpath("//input[@placeholder='Email']")).click();
    driver.findElement(By.xpath("//input[@placeholder='Email']")).clear();
    driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys("asdf@monkeyface.edu");
    driver.findElement(By.xpath("//input[@placeholder='UserName']")).click();
    driver.findElement(By.xpath("//input[@placeholder='UserName']")).clear();
    driver.findElement(By.xpath("//input[@placeholder='UserName']")).sendKeys("JoeDoe");
    driver.findElement(By.xpath("//input[@placeholder='Password']")).click();
    driver.findElement(By.xpath("//input[@placeholder='Password']")).clear();
    driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("asdf456");
    driver.findElement(By.xpath("//input[@placeholder='Re-Enter Password']")).click();
    driver.findElement(By.xpath("//input[@placeholder='Re-Enter Password']")).clear();
    driver.findElement(By.xpath("//input[@placeholder='Re-Enter Password']")).sendKeys("NOTMATCH123");
    driver.findElement(By.xpath("//button[@type='submit']")).click();
    assertEquals("Password does not match. Please try again.", closeAlertAndGetItsText());
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
