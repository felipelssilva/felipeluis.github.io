<?php
require '../vendor/autoload.php';
use Mailgun\Mailgun;

# First, instantiate the SDK with your API credentials
$mg = Mailgun::create('2085f31942fc72990ca17c10831337e2-4a62b8e8-67a9d9e0');


header('Content-type: application/json');

function test_input($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

function getPost($key)
{
	return isset($_POST[$key]) ? filter($_POST[$key]) : null;
}

function filter($var)
{
	return $var;
}

function jsonReturn($success = false)
{
	if ($success == true) {
		$type = "success";
		$title = "Contact sent successfully!";
		$body = "Email sent, I will return this contact soon!";
	} else {
		$type = "error";
		$title = "Oops!";
		$body = "Something went wrong, please try again.";
	}

	$data = array('type' => $type, 'title' => $title, 'body' => $body);
	return json_encode($data);
}

if (strtoupper($_SERVER['REQUEST_METHOD']) === 'POST') {
	if (empty($_POST["nome"])) {
		$nameErr = "Name is required!!!";
		echo $nameErr;
		return;
	} else {
		$name = test_input($_POST["nome"]);
	}
	if (empty($_POST["email"])) {
		$emailErr = "Email is required";
		echo $emailErr;
		return;
	} else {
		$email = test_input($_POST["email"]);
	}
	if (empty($_POST["assunto"])) {
		$subjectErr = "Subject is required";
		echo $subjectErr;
		return;
	} else {
		$subject = test_input($_POST["assunto"]);
	}
	if (empty($_POST["mensagem"])) {
		$messageErr = "Message is required";
		echo $messageErr;
		return;
	} else {
		$message = test_input($_POST["mensagem"]);
	}

	$date = date('d-m-Y H:i:s');
	$to = "contato@felipeluis.com.br";
	$subject = 'CONTATO DO SITE';

	$message = '
	<html>
	<head>
		<title>CONTATO DO SITE</title>
	</head>
	<body>
		<p><b>Nome:</b> <br> ' . getPost('nome') . '</p>
		<p><b>Email:</b> <br> ' . getPost('email') . '</p>
		<p><b>Assunto:</b> <br> ' . getPost('assunto') . '</p>
		<p><b>Mensagem:</b> <br> ' . getPost('mensagem') . '</p>
		<br>
		<hr>
		<h5 style="color:#666;">Horário do envio: ' . $date . '</h5>
	</body>
	</html>
	';

	try {

		$result = $mg->messages()->send('sandbox8932aa55ece24eadb7f1210bd7724cfb.mailgun.org', [
			'from'    => 'postmaster@sandbox8932aa55ece24eadb7f1210bd7724cfb.mailgun.org',
			'to'      => $to,
			'subject' => $subject,
			'html'    => $message
		]);

		if ($result) {
			echo jsonReturn(true);
		} else {
			echo jsonReturn(false);
		}
	} catch (Exception $e) {
		echo jsonReturn(false);
	}
} else {
	echo jsonReturn(false);
}
