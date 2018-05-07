<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#303549">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#303549">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-status-bar-style" content="#303549">

<!-- BEGIN Metadata  -->

<meta name="author" content="Felipe Luis Soares Silva">
<meta name="description" content="Work with web designer, developer and photographer">
<meta name="keywords" content="job, dev, developer, freelancer, web, designer, web designer, photo, photography, photographer" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Felipe Luis" />
<meta property="og:title" content="Felipe Luis - Web Designer / Developer / Photographer" />
<meta property="og:url" content="http://www.felipeluis.com.br" />
<meta property="og:description" content="Work with web designer, developer and photographer" />
<meta property="og:locale" content="en" />
<meta property="og:image" content="/img/felipeluis.png" />
<meta property="og:image:width" content="88" />
<meta property="og:image:height" content="107" />
<meta property="og:image:type" content="image/jpeg" />
<!-- END Metadata -->

<link rel="shortcut icon" href="/img/favicon.ico" />

<title>Felipe Luis - Web Designer / Developer / Photographer</title>

<!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css">

<!-- Custom Fonts -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" type="text/css">

<!-- Plugin CSS -->
<link rel="stylesheet" href="/css/magnific-popup.css" type="text/css">

<!-- Custom CSS -->
<link rel="stylesheet" href="/css/creative.css" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>

<body id="page-top">

<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">Felipe Luis</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a class="page-scroll" href="#social-medias">My Social Medias</a>
                </li>
                <li>
                    <a class="page-scroll" href="#contact">Contact me</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>


<?php
$ir = $_GET['page'];
$ext = (isset($_GET['ext']));
if (empty($ext)){ $ext="php"; }
if (empty($ir)){ $ir = "content.php"; } else { $ir .= ".".$ext; }
if (file_exists($ir)){ include $ir; } else { include "errors/404.php"; }
?>


<!-- jQuery -->
<script src="/js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="/js/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="/js/scrollreveal.min.js"></script>
<script src="/js/jquery.easing.min.js"></script>
<script src="/js/jquery.fittext.js"></script>
<script src="/js/jquery.magnific-popup.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="/js/creative.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79531618-1', 'auto');
  ga('send', 'pageview');
</script>

</body>

</html>