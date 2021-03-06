package model;


import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

@WebServlet("/CustomerAPI")
public class CustomerAPI extends HttpServlet {
private static final long serialVersionUID = 1L;

 Customer customerObj = new Customer();
public CustomerAPI() {
super();
// TODO Auto-generated constructor stub
}

 protected void doGet(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
// TODO Auto-generated method stub
response.getWriter().append("Served at: ").append(request.getContextPath());
}
protected void doPost(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
// TODO Auto-generated method stub
String outputString = customerObj.insertCustomer(
request.getParameter("customerFname"),
request.getParameter("customerLname"),
request.getParameter("customerEmail"),
request.getParameter("customerTpno"),
request.getParameter("customerAddress"),
request.getParameter("customerType"));

 response.getWriter().write(outputString);
doGet(request, response);
}

/**
* @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
*/
protected void doPut(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
// TODO Auto-generated method stub
Map paras = getParasMap(request);

 String outputString = customerObj.updateCustomer(
paras.get("customerID").toString(),
paras.get("customerFname").toString(),
paras.get("customerLname").toString(),
paras.get("customerEmail").toString(),
paras.get("customerTpno").toString(),
paras.get("customerAddress").toString(),
paras.get("customerType").toString());

 response.getWriter().write(outputString);
}
/**
* @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
*/
protected void doDelete(HttpServletRequest request, HttpServletResponse response)
throws ServletException, IOException {
// TODO Auto-generated method stub
Map paras = getParasMap(request);
String output = customerObj.deleteCustomer(paras.get("customerID").toString());
response.getWriter().write(output);
}

 // Convert request parameters to a Map
private static Map getParasMap(HttpServletRequest request) {
Map<String, String> map = new HashMap<String, String>();
try {
Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
scanner.close();
String[] params = queryString.split("&");
for (String param : params) {
String[] p = param.split("=");
map.put(p[0], p[1]);
}
} catch (Exception e) {
}
return map;
}
}