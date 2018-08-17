<!DOCTYPE html>
<html lang="pt_br">

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
    <meta name="author" content="Felipe Luis">
    <meta name="description" content="Trabalho com web designer, desenvolvimento e sou freelancer">
    <meta name="keywords" content="job, dev, developer, freelancer, freela, web, designer, web designer, desenvolvimento, fullstack, front-end, frontend, backend, back-end" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Felipe Luis" />
    <meta property="og:title" content="Felipe Luis" />
    <meta property="og:url" content="http://www.felipeluis.com.br" />
    <meta property="og:description" content="Trabalho com web designer, desenvolvimento e sou freelancer" />
    <meta property="og:locale" content="pt_br" />
    <meta property="og:image" content="/img/felipeluis.png" />
    <meta property="og:image:width" content="88" />
    <meta property="og:image:height" content="107" />
    <meta property="og:image:type" content="image/jpeg" />
    <!-- END Metadata -->

    <link rel="shortcut icon" href="/public/img/favicon.ico" />

    <link rel="manifest" href="/manifest.json">

    <title>Felipe Luis - Web Designer, Desenvolvedor</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="/public/css/styles.css" type="text/css">
    <link rel="stylesheet" href="/public/css/styles_2.css" type="text/css">

    <!-- Custom Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,900' rel='stylesheet' type='text/css'>

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
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/public/pdf/curriculo.pdf" target="_blank">Currículo</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#social-medias">Minhas redes sociais</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Entre em contato</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Full Page Image Background Carousel Header -->
    <header id="myCarousel" class="carousel slide">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <!-- Wrapper for Slides -->
        <div class="carousel-inner">
            <div class="item active">
                <!-- Set the first background image using inline CSS below. -->
                <div class="fill" style="background-image:url('/public/img/webdesigner.jpg');">
                    <div class="header-content">
                        <div class="header-content-inner">
                            <h1><img alt="Felipe Luis" src="/public/img/logo-felipe-luis.png" width="300" height="118" class="sr-top" /></h1>
                            <hr class="sr-top">
                            <h1 class="sr-top"> Front-end </h1>
                            <a href="#contact" class="btn btn-primary btn-xl page-scroll sr-top">Entre em contato</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-caption">
                    <h2></h2>
                </div>
            </div>
            <div class="item">
                <!-- Set the second background image using inline CSS below. -->
                <div class="fill" style="background-image:url('/public/img/developer.jpg');">
                    <div class="header-content">
                        <div class="header-content-inner">
                            <h1><img alt="Felipe Luis" src="/img/logo-felipe-luis-menor.png" width="300" height="118" class="sr-top" /></h1>
                            <hr class="sr-top">
                            <h1 class="sr-top"> Back-end </h1>
                            <a href="#contact" class="btn btn-primary btn-xl page-scroll sr-top">Entre em contato</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-caption">
                    <h2></h2>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>

    </header>

    <?php
        $ir = $_GET['page'];
        $ext = (isset($_GET['ext']));
        if (empty($ext)){ $ext="php"; }
        if (empty($ir)){ $ir = "content.php"; } else { $ir .= ".".$ext; }
        if (file_exists($ir)){ include $ir; } else { include "errors/404.php"; }
    ?>

    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    
    <script src="/public/js/scripts.js"></script>

    <!-- Sweetalert2 JavaScript -->
    <script src="//unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <script src="//www.google.com/recaptcha/api.js"></script>

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