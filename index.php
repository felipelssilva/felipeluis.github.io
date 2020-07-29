<?php
include 'src/baseURI.php';
$uri = URI::base();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="theme-color" content="#303549">
  <meta name="msapplication-navbutton-color" content="#303549">
  <meta name="apple-mobile-web-app-status-bar-style" content="#303549">

  <meta name="author" content="Felipe Luis">
  <meta name="description" content="I'm working on with development for SAP C/4HANA Front-end">
  <meta name="keywords" content="job, dev, developer, freelancer, freela, web, desenvolvimento, front-end, frontend, sap, hybris, c4hana, hana, c4, c4 hana, jQuery, JavaScript, Vanilla, ES6, ES5, React, Grunt, Gulp, SASS, Less, CSS3" />
  
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Felipe Luis" />
  <meta property="og:title" content="Felipe Luis" />
  <meta property="og:url" content="<?php echo $uri; ?>" />
  <meta property="og:description" content="I'm working on with development for SAP C/4HANA Front-end" />
  <meta property="og:locale" content="en" />
  <meta property="og:image" content="/img/logo-felipe-luis.png" />
  <meta property="og:image:width" content="88" />
  <meta property="og:image:height" content="107" />
  <meta property="og:image:type" content="image/png" />

  <link rel="shortcut icon" href="/public/img/favicon.ico" />

  <link rel="manifest" href="/manifest.json">

  <title>Felipe Luis - SAP C/4HANA Front-end Developer</title>

  <link rel="stylesheet" href="/public/vendors/bootstrap/css/bootstrap.min.css" type="text/css">
  <link rel="stylesheet" href="/public/vendors/sweetalert/sweetalert2.min.css" type="text/css">
  <link rel="stylesheet" href="/public/vendors/fontawesome/css/font-awesome.min.css" type="text/css">

  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,900' rel='stylesheet' type='text/css'>

  <link rel="stylesheet" href="/public/custom/css/styles.css" type="text/css">

  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top">
  <header id="mainNav">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Felipe Luis</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto mr-3">
          <li class="nav-item active">
            <a class="nav-link js-scroll-trigger" href="#page-top">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a data-toggle="tooltip" data-placement="bottom" title="Will open in another window" class="nav-link" target="_blank" href="#">My Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about-me">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#social-medias">My Social Media</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <main role="main">

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/public/img/webdesigner.jpg" alt="Front-end developer" width="100%" class="bd-placeholder-img">
          <div class="container">
            <div class="carousel-caption">
              <h1><img alt="Felipe Luis" src="/public/img/logo-felipe-luis.png" width="300" height="118" class="sr-top" /></h1>
              <hr class="sr-top">
              <p class="sr-top"> SAP Hybris Front-end Developer </p>
              <a href="#contact" class="js-scroll-trigger btn btn-primary btn-lg">Contact me</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
    </div>

    <?php
    $ir = $_GET['page'];
    $ext = (isset($_GET['ext']));
        if (empty($ext)){ $ext="php"; }
        if (empty($ir)){ $ir = "content.php"; } else { $ir .= ".".$ext; }
        if (file_exists($ir)){ include $ir; } else { include "errors/404.php"; }
    ?>

    <footer class="container">
      <p class="float-right"><a href="#page-top" class="js-scroll-trigger">Back to top</a></p>
      <p>© <?php echo date('Y'); ?> Felipe Luis. </p>
      <?php /*· <a href="#">Privacy</a> · <a href="#">Terms</a> */ ?>
    </footer>

  </main>

  <script src="/public/vendors/jquery/jquery.min.js"></script>
  <script src="/public/vendors/bootstrap/js/bootstrap.min.js"></script>
  <script src="/public/vendors/sweetalert/sweetalert2.min.js"></script>

  <script src="/public/js/scripts-min.js"></script>

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