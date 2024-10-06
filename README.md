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
Step 2: Set Environment Variables

You need to set the environment variable for JAVA_HOME and CATALINA_HOME (the directory where Tomcat is installed).
Windows:
1. Set JAVA_HOME:
     - Open Control Panel > System and Security > System > Advanced System Settings > Environment Variables.
     - Under System variables, click New and set the following:
         - Variable name: JAVA_HOME
         - Variable value: The path to your JDK installation (e.g., C:\Program Files\Java\jdk-11).
2. Set CATALINA_HOME:
     - Under System variables, click New and set the following:
         - Variable name: CATALINA_HOME
         - Variable value: The path to your Tomcat installation (e.g., C:\apache-tomcat-9.0.x).


### Step 7: Run the project using below command
``` mvn clean install tomcat7:run ```
