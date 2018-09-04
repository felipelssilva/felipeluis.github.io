<?php

// Turn off all error reporting
error_reporting(0);

// Report simple running errors
error_reporting(E_ERROR | E_WARNING | E_PARSE);

// Reporting E_NOTICE can be good too (to report uninitialized
// variables or catch variable name misspellings …)
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

// Report all errors except E_NOTICE
error_reporting(E_ALL & ~E_NOTICE);

// Report all PHP errors (see changelog)
error_reporting(E_ALL);

// Report all PHP errors
error_reporting(-1);

// Same as error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

header('Content-type: application/json');

function test_input($data) {
	$data=trim($data);
	$data=stripslashes($data);
	$data=htmlspecialchars($data);
	return $data;
}

function getPost($key) {
	return isset($_POST[$key]) ? filter($_POST[$key]) : null;
}

function filter($var) {
	return $var;
}

function jsonReturn($success=false) {
	if ($success == true){

		$title = "Contato enviado com sucesso!";
		$body = "Email enviado, em breve eu retornarei este contato!";

		$data = array('title' => $title,'body' => $body);

		return json_encode($data);
	} else {

		$title = "Oops!";
		$body = "Alguma coisa deu errado, por favor tente novamente.";

		$data = array('title' => $title,'body' => $body);

		return json_encode($data);
	}
}

if(strtoupper($_SERVER['REQUEST_METHOD']) === 'POST') {
	if(empty($_POST["nome"])) {
		$nameErr="Name is required!!!";
		echo $nameErr;
		break;
	} else {
		$name=test_input($_POST["nome"]);
	}
	if(empty($_POST["email"])) {
		$emailErr="Email is required";
		echo $emailErr;
		break;
	} else {
		$email=test_input($_POST["email"]);
	}
	if(empty($_POST["assunto"])){
		$subjectErr="Subject is required";
		echo $subjectErr;
		break;
	} else {
		$subject=test_input($_POST["assunto"]);
	}
	if (empty($_POST["mensagem"])){
		$messageErr = "Message is required";
		echo $messageErr;
		break;
	} else {
		$message = test_input($_POST["mensagem"]);
	}
 
	$date = date('d-m-Y H:i:s');
	$to = "contato@felipeluis.com.br" ;
	$subject = 'CONTATO DO SITE';

	$message = '
	<html>
	<head>
		<title>CONTATO DO SITE</title>
	</head>
	<body>
		<p><b>Nome:</b> <br> '.getPost('nome').'</p>
		<p><b>Email:</b> <br> '.getPost('email').'</p>
		<p><b>Assunto:</b> <br> '.getPost('assunto').'</p>
		<p><b>Mensagem:</b> <br> '.getPost('mensagem').'</p>
		<br>
		<hr>
		<h5 style="color:#666;">Horário do envio: '.$date.'</h5>
	</body>
	</html>
	';

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: '.getPost('nome').' <'.getPost('email').'>' . "\r\n";

	if (mail($to, $subject, $message, $headers)) {
		echo jsonReturn(true);
	} else {
		echo jsonReturn(false);
	}
} else {
	echo jsonReturn(false);
}