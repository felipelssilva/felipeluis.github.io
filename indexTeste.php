<?php
header('Content-Type: text/html; charset=utf-8');

require 'vendor/autoload.php';


$slugifier = new \Slug\Slugifier();

// Definindo tratamento de caracteres com acentuação
$slugifier->setTransliterate(true); 

$frase = 'Frase com acentuação para teste de criação de slug';

$slug = $slugifier->slugify($frase);

echo '<b>Frase natural: </b>' . $frase . "<br /><br />";
echo '<b>Frase com aplicação de slug: </b>' . $slug . "<br /><br />";