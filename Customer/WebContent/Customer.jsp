<%@page import="model.Customer"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Customer Management</title>
<link href="myStyle.css" rel="stylesheet" />
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/Customer.js"></script>

 </head>
<body>
<div class="container">
<p class="font-weight-bold">
<center>
<h1><u><i><b>Customer Management</b></i></u></h1>
</center>
</p>
<br><br>
<fieldset>
<legend><b>Add Customer Details</b></legend>
<form id="CUSTOMER" name="CUSTOMER" class="border border-light p-5">



<div class="form-outline mb-4">
<label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Customer Name</label>
<input type="hidden" id="customerID" name="customerID">
<input type="text" id="customerFname" name="customerFname" class="form-control" >
</div>
<div class="form-outline mb-4">
<label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Customer Last Name</label>
<input type="text" id="customerLname" name="customerLname" class="form-control" >
</div>
<div class="form-outline mb-4">
<label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Customer Email</label>
<input type="text" id="customerEmail" name="customerEmail" class="form-control" >
</div>
<div class="form-outline mb-4">
<label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Customer Telephone No</label>
<input type="text" id="customerTpno" name="customerTpno" class="form-control" >
</div>
<div class="form-outline mb-4">
<label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Customer Address</label>
<input type="text" id="customerAddress" name="customerAddress" class="form-control" >
</div>
<div class="form-outline mb-4">
<label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Customer Type </label>
<input type="text" id="customerType" name="customerType" class="form-control">
</div>

<br>


<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary btn-lg btn-block">
</form>
</fieldset>
<br>
<div class="container" id="OrderGrid">
<fieldset>
<legend><b>View Customer Details</b></legend>
<form method="post" action="Customer.jsp" class="table table-striped">
<%
Customer viewCustomer = new Customer();
out.print(viewCustomer.readCustomers());
%>
</form>
<br>
</fieldset>
</div>
</div>
</body>
</html>