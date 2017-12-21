<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

if( $_SERVER['REQUEST_METHOD'] == 'POST' )
{

	/* date */
	$data = date('d-m-Y H:i:s');

	/* multiple recipients */
	$to = "contato@felipeluis.com.br" ;

	/* subject */
	$subject = 'CONTATO DO SITE';

	/* message */
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
	<h5 style="color:#666;">Horário do envio: '.$data.'</h5>
	</body>
	</html>
	';

	/* To send HTML mail, the Content-type header must be set */
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	/* Additional headers */
	/* $headers .= 'To: Felipe Luis <'.$to.'>' . "\r\n"; */
	$headers .= 'From: '.getPost('nome').' <'.getPost('email').'>' . "\r\n";

	/* Mail it */
	if (mail($to, $subject, $message, $headers))
	{
		echo "Email enviado com sucesso, em breve eu retornarei este contato!";
	}
	else
	{
		echo "Ichi, alguma coisa deu errado, por favor tente novamente.";
	}

}

function getPost( $key )
{
	return isset( $_POST[ $key ] ) ? filter( $_POST[ $key ] ) : null;
}

function filter( $var )
{
	return $var; /* faça o tratamento */
}

?>