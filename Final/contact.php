<?php
$to = 'angryandre@gmail.com';
$subject = 'Client Enquiry';
$headers = 'From: (Website) <angryandre@gmail.com>' . "\r\n" . 'Content-type: text/html; charset=utf-8';
$message = '
<html>
	<head>
		<title>You have received a new message!</title>
	</head>
	<body>


		<h4>Full name: <span style="font-weight: normal;">' . $_POST['name'] . '</span></h4>
		<h4>Email: <span style="font-weight: normal;">' . $_POST['email'] . '</span></h4>
		<h4>Subject: <span style="font-weight: normal;">' . $_POST['subject'] . '</span></h4>
		<h4>Message: <span style="font-weight: normal;">' . $_POST['message'] . '</span></h4>



	</body>
</html>';

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
	if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	    mail($to, $subject, $message, $headers) or die('<span style="color: red;">Error sending Mail</span>');
	    header('Location: success.html');
	}
} else {
	header('Location: error.html');
}
?>
