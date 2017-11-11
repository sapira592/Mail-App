$(document).ready(function(){
	  setSubmitLogin();
});	  	


function setSubmitLogin(){
	$('#loginForm').submit(function(){

		var user = $('#user').val().toLowerCase();
		var pass = $('#pass').val();

		$('#loaderBox').addClass("loader");

		setTimeout(function() 
          {
          	 $.ajax({
	           type: "post",
	           url: "http://localhost/MailApp/server/login.php",
	           data: {"user": user, "pass":pass}, // serializes the form's elements.
	           success: function(res)
	           {
	           		if(res=="ok"){
		           	 	alert("Correct");
		           	}
		           	else{
		           		alert("Not a manager");
		           	} 
		           	$('#loaderBox').removeClass("loader");
		       }
	        });
             
          }, 3000);
	 
    	return false;
    });
}