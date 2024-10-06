#  To run this Reposiotry: Follow below steps

### Step 1: Clone the repository using below command

``` git clone https://github.com/DH-ai/JavaPriceChecker/tree/master ```


### Step 2: Delete these files and folders
1. target
2. .idea



### Step 3: Install Apache Maven using this link
``` https://maven.apache.org/download.cgi ```



### Step 4: Add Maven to Environment Variables

#### For Windows:

1. **Download and Install Maven:**
   - Download the Maven binary zip from the official website: https://maven.apache.org/download.cgi.
   - Extract the zip file to a directory, e.g.,`C:\Program Files\Apache-Maven\apache-maven-x.x.x.`

2. **Set Environment Variables:**
   - Open **Control Panel > System and Security > System > Advanced system settings > Environment Variables.**
   - Under **System variables**, select `Path` and click **Edit**.
   - Click **New** and add the path to your Maven `bin` directory, e.g., `C:\Program Files\Apache-Maven\apache-maven-x.x.x\bin.`
   - Click **OK** to close all windows.

3. **Verify Installation:**
    - Open **Command Prompt** and type `mvn -version`.
    - You should see the Maven version and other information if it's set up correctly.


### Step 5: Instal tomcat server using this link
- https://tomcat.apache.org/download-90.cgi
make sure it is of version 9.x.x

### Step 6: Add Tomcat to Environment Variables

You need to set the environment variable for JAVA_HOME .
Windows:
1. Set **JAVA_HOME** :
     - Open **Control Panel > System and Security > System > Advanced System Settings > Environment Variables.**
     - Under **System variables**, click `New` and set the following:
         - Variable name: **JAVA_HOME**
         - Variable value: The path to your JDK installation (e.g., `C:\Program Files\Java\jdk-23`).
     

### Step 7: Install MySQL using this link
- https://dev.mysql.com/downloads/mysql/
- Now setup a MYSQL server with followring properties
- **username**: `root`
- **password**: `password`
- **port**: **_3306_** - check this multiple times
- **database**: `price_tracker_db` - this is name of your database

Now check if your MYSQL server is running or not
- Open Command Prompt and type `mysql --version`.

### Step 8: Create a database in MYSQL
- Open Command Prompt and type `mysql -u root -p`
- Enter your password, in our case password is `password`
- Now type `CREATE DATABASE price_tracker_db;`
- Now type `USE price_tracker_db;`
- Now type
```
CREATE TABLE products (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          price DECIMAL(10, 2) NOT NULL,
                          platform VARCHAR(100),
                          link VARCHAR(255),
                          last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
```
- Lets add som values
- Now type
```
INSERT INTO products (name, price, platform, link) VALUES ('Product 1', 100.00, 'Amazon', 'https://www.amazon.com/product1');
```
- Can add as many values as you want 
- Now type `SELECT * FROM products;` to see the values you added for a check
- Now exit the MYSQL by typing `exit`

### Step 9: Open the project in your IDE
- Open the project in your IDE and go to your project folder
- You should be able to see src,frontend, pop.xml etc there
- Now in your terminal type `mvn package`
- This will create a **target** folder in your project


