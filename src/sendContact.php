<?php
require '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__.'/../');
$dotenv->load();

$apiKey = getenv('SG_API_KEY');

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
	// $email = "contato@felipeluis.com.br";
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

	$from = new SendGrid\Email($name, $email);
	$to = new SendGrid\Email('Felipe Luis', "contato@felipeluis.com.br");
	$content = new SendGrid\Content("text/html", $message);
	$mail = new SendGrid\Mail($from, $subject, $to, $content);

	$sg = new \SendGrid($apiKey);

	try {
		$response = $sg->client->mail()->send()->post($mail);

		if ($response) {
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
