<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Hello World JSP</title>
</head>
<body>
<h1>Hello, World!</h1>
<p>This is a simple JSP page.</p>

<%
    // Simple Java code in JSP
    String message = "Hello from JSP!";
    out.println("<p>" + message + "</p>");
%>
</body>
</html>\
