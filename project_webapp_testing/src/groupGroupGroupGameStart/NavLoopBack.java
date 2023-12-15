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

public class NavLoopBack {
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
  public void testUntitledTestCase() throws Exception {
    driver.get(baseUrl + "chrome://newtab/");
    driver.get("http://localhost:5173/");
    driver.findElement(By.xpath("//*[@href='/signin']")).click();
    assertEquals("Game Store", driver.findElement(By.tagName("h1")).getText() );
    driver.findElement(By.linkText("Forgot Password?")).click();
    assertEquals("Check if your email is valid", driver.findElement(By.tagName("p")).getText() );
    driver.findElement(By.linkText("Sign In")).click();
    assertEquals("Game Store", driver.findElement(By.tagName("h1")).getText() );
    driver.findElement(By.linkText("Sign Up")).click();
    assertEquals("Sign Up", driver.findElement(By.tagName("button")).getText() );
    driver.findElement(By.xpath("//*[@href='/']")).click();
    assertEquals("Search Game...", driver.findElement(By.tagName("input")).getAttribute("placeholder") );

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
