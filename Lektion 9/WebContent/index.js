/**
 * 
 */

$(document).ready(function() {
	$('#loginsubmit').click(function(){
		alert("clicked!");

	});
	//$('#maincontainer').html("New content");
});

function login(){
	event.preventDefault();
	var password = $('#password').val();
	var username = $('#username').val();
	alert("username/password" + password + username);
	if (password == 'test' && username == 'test'){
		$('#maincontainer').hide();
		$('#brugermenucontainer').show();	
		$('#testcontainer').load('http://budtz.eu');
	} else {
		alert("Wrong username/password");
		$('#loginsubmit').css("background","red");
	}


}