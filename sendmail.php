<?php 

// ------------------------------------------------------------------------------------------

// Developed by: Wesley Raffan
// Date: October 29, 2013
// From: Developers Of The Round Table
// www.developersoftheroundtable.com

//-------------------------------------------------------------------------------------------


$webmaster = "reboot.uw@gmail.com";

$contactEmail = $_REQUEST['email'];
$contactName = $_REQUEST['name'];
$contactComment = $_REQUEST['text'];


$subject = "Inquiry to reboot"

/*function isInjected($str)
{
	$injections = array('(\n+)', '(\r+)', '(\t+)', '(%0A+)', '(%0D+)', '(%08+)', '(%09+)');
	$inject = join('|', $injections);
	$inject = "/$inject/i";

	if(preg_match($inject,$str))
	{
		return true;
	}
	else
	{
		return false;
	}
}*/


// If the form fields are empty, redirect to the error page.
/*if (  $contactName == NULL || $contactEmail == NULL || $contactComment == NULL )
{
	//echo( "Empty field is required" );  // Used for testing.
	header( "Location: $error_page" ); // For different errors, create other error message pages.
}*/
//If the email is not a valid email address
/*elseif(filter_var($ContactEmail, FILTER_VALIDATE_EMAIL) === false){
    header( "Location: $error_page" );
    
}*/
// If ContactEmail injection is detected, redirect to the error page.
/*elseif ( isInjected($ContactEmail) )
{
	//echo( "Injection detected" ); // Used for testing.
	header( "Location: $error_page" ); // For different errors, create other error message pages.
}*/

	// Concatenate the information to be sent as a single value ContactEmail.
	$Message = "Name: " . $contactName . "\n" . "\n" . $contactEmail . "\n\n" . $contactComment;
	
	$Confirmation = mail( $webmaster, $Subject, $Message, "From: $ContactEmail" );





?>






?>