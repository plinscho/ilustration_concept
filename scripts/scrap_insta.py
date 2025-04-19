from selenium import webdriver
from selenium.webdriver.common.by import By
import time

print("Opening Chrome.")
driver = webdriver.Chrome()
driver.get('https://www.instagram.com/theillustrationconcept/')
time.sleep(5)

for i in range(10):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    print(f"Scrolling ... {i}s")
    time.sleep(3)

images = driver.find_elements(By.CSS_SELECTOR, 'img')
urls = [img.get_attribute('src') for img in images]


dest_file = open("srcs.txt", "x")
urls = list(set(urls))
for i, url in enumerate(urls):
    print(f"[{i+1}] {url} \n")
    dest_file.write(f"{url}\n")
    print("Written in file succesfully.\n")

dest_file.close()
driver.quit()

