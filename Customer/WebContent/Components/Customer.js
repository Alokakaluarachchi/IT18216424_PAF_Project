//hide alert
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#hidOrderIDSave").val("");
	$("#CUSTOMER")[0].reset();
});

$(document).on("click", "#btnSave", function(event) {

	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	const email = $("#customerEmail").val();
	debugger;
	if(!regex.test(email)){
		$("#alertError").text("invalid email");
		$("#alertError").show();
		return;
	}else{
	$("#alertError").hide();
	}
	
	var numberPattern = /\d+/g;
	const isPhoneNumber = $("#customerTpno").val().match(numberPattern);
	
	if(!isPhoneNumber){
	$("#alertError").text("invalid phone number");
		$("#alertError").show();
		return
	}else{
	$("#alertError").hide();
	}
	
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var type = ($("#customerID").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "CustomerAPI",
		type : type,
		data : $("#CUSTOMER").serialize(),
		dataType : "text",
		complete : function(response, status) {
			//console.log(status);
			debugger;
			//onItemSaveComplete(response.responseText, status);
			window.setTimeout(function(){location.reload()},3000)
		}
	});

});

function onItemSaveComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#OrderGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error") {
		
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#customerID").val("");
	$("#CUSTOMER")[0].reset();
}

$(document).on("click", ".btnRemove", function(event) {
	
	$.ajax({
		url : "CustomerAPI",
		type : "DELETE",
		data : "customerID=" + event.target.value,
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
			window.location.reload(true);
		}
	});
});

function onItemDeleteComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#OrderGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		
	} else if (status == "error") {
		
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event)
		{
		debugger;
			$("#customerID").val($(this).closest("tr").find('td:eq(0)').text());
			$("#customerFname").val($(this).closest("tr").find('td:eq(1)').text());
			$("#customerLname").val($(this).closest("tr").find('td:eq(2)').text());
			$("#customerEmail").val($(this).closest("tr").find('td:eq(3)').text());
			$("#customerTpno").val($(this).closest("tr").find('td:eq(4)').text());
			$("#customerAddress").val($(this).closest("tr").find('td:eq(5)').text());
			$("#customerType").val($(this).closest("tr").find('td:eq(6)').text());
			
		});


// CLIENTMODEL=========================================================================
function validateItemForm() {
	
	// customerFname
	if ($("#customerFname").val().trim() == "") {
		return "Please insert Customer Fisrt Name.";
	}
	
	// customerLname
	if ($("#customerLname").val().trim() == "") {
		return "Please insert Customer Last Name.";
	}
	
	// Customer Email
	if ($("#customerEmail").val().trim() == "") {
		return "Please insert Customer Email.";
	}
	
	// Customer Contact
	if ($("#customerTpno").val().trim() == "") {
		return "Please insert Customer Contact Number.";
	}
	
	
	// Customer Address
	if ($("#customerAddress").val().trim() == "") {
		return "Please insert Customer Address.";
	}
	
	// customerType
	if ($("#customerType").val().trim() == "") {
		return "Please insert Customer Type.";
	}
	
	
	
	return true;
}
