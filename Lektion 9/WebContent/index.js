/**
 * 
 */
//Alternate version of attaching clickhandler
$(document).ready(function() {
//	$('#loginsubmit').click(function(){
//		login(); 
//	});
});

function login(){
	event.preventDefault();
	var password = $('#password').val();
	var username = $('#username').val();
	//alert("username/password" + password + username);
	if (password == 'test' && username == 'test'){
		$('#maincontainer').hide();
		$('#brugermenucontainer').show();	
	} else {
		alert("Wrong username/password");
		$('#loginsubmit').css("background","red");
	}


}
function newUserShow(){
	$('#newuser').show();
	$('#brugermenucontainer').hide();
	event.preventDefault();
}
function showBrugerAdmin(){
	$('#newuser').hide();
	$('#brugermenucontainer').show();
	event.preventDefault();
}
