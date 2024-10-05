package com.server.pricechecker;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import com.server.pricechecker.Product;
import com.server.pricechecker.DBConnection;

//@WebServlet(name= "Initial Servlet", urlPatterns = "/price-checker")
public class PriceCheckerServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        ArrayList<Object> products = new ArrayList<>();
        try (Connection conn = DBConnection.getConnection()) {
            String sql = "SELECT * FROM products";
            PreparedStatement statement = conn.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                Product product = new Product();
                product.setName(resultSet.getString("name"));
                product.setPrice(resultSet.getDouble("price"));
                product.setPlatform(resultSet.getString("platform"));
                product.setLink(resultSet.getString("link"));
                products.add(product);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        String json = new Json().toJson(products);
        response.getWriter().write(json);
    }
}



