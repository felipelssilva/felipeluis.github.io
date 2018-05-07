<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Felipe Luis - Web Designer / Developer / Photographer</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

    <!-- Custom Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" type="text/css">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="css/magnific-popup.css" type="text/css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/creative.css" type="text/css">

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
                   <? /* <li>
                        <a class="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#services">Services</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#portfolio">Portfolio</a>
                    </li> */ ?>
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

    <header>
        <div class="header-content">
            <div class="header-content-inner">
                <h1><img alt="Felipe Luis" src="img/logo-felipe-luis-menor.png" width="300" height="118" class="sr-top" /></h1>
                <hr class="sr-top">
                <p class="sr-top"> Web Designer / Developer / Photographer </p>
                <a href="#contact" class="btn btn-primary btn-xl page-scroll sr-top">Contact me</a>
            </div>
        </div>
    </header>

    <section class="bg-primary" id="social-medias">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">My social medias \o/</h2>
                    <hr class="light">
                    <!-- p class="text-faded"></p -->
                    <nav class="social-medias">
                        <ul>
                            <li><a href="https://www.facebook.com/FelipeL.Silva" target="_blank"><i class="fa fa-facebook-official fa-4x sr-icons" rel="tooltip" title="Facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/felipeluiss/" target="_blank"><i class="fa fa-instagram fa-4x sr-icons" rel="tooltip" title="Instagram"></i></a></li>
                            <li><a href="https://twitter.com/FelipeLuisSS" target="_blank"><i class="fa fa-twitter-square fa-4x sr-icons" rel="tooltip" title="Twitter"></i></a></li>
                            <li><a href="https://plus.google.com/u/1/+FelipeLuisSSilva/posts" target="_blank"><i class="fa fa-google-plus-square fa-4x sr-icons" rel="tooltip" title="Google+"></i></a></li>
                            <li><a href="https://br.linkedin.com/in/felipelssilva" target="_blank"><i class="fa fa-linkedin-square fa-4x sr-icons" rel="tooltip" title="LinkedIn"></i></a></li>
                            <li><a href="https://www.behance.net/felipeluiss" target="_blank"><i class="fa fa-behance-square fa-4x sr-icons" rel="tooltip" title="Behance"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <?
/*
<a href="#services" class="page-scroll btn btn-default btn-xl sr-button">Get Started!</a>

    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">At Your Service</h2>
                    <hr class="primary">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-diamond text-primary sr-icons"></i>
                        <h3>Sturdy Templates</h3>
                        <p class="text-muted">Our templates are updated regularly so they don't break.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                        <h3>Ready to Ship</h3>
                        <p class="text-muted">You can use this theme as is, or you can make changes!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                        <h3>Up to Date</h3>
                        <p class="text-muted">We update dependencies to keep things fresh.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-heart text-primary sr-icons"></i>
                        <h3>Made with Love</h3>
                        <p class="text-muted">You have to make your websites with love these days!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="no-padding" id="portfolio">
        <div class="container-fluid">
            <div class="row no-gutter popup-gallery">
                <div class="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/1.jpg" class="portfolio-box">
                        <img src="img/portfolio/thumbnails/1.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/2.jpg" class="portfolio-box">
                        <img src="img/portfolio/thumbnails/2.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/3.jpg" class="portfolio-box">
                        <img src="img/portfolio/thumbnails/3.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/4.jpg" class="portfolio-box">
                        <img src="img/portfolio/thumbnails/4.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/5.jpg" class="portfolio-box">
                        <img src="img/portfolio/thumbnails/5.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="img/portfolio/fullsize/6.jpg" class="portfolio-box">
                        <img src="img/portfolio/thumbnails/6.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <aside class="bg-dark">
        <div class="container text-center">
            <div class="call-to-action">
                <h2>Free Download at Start Bootstrap!</h2>
                <a href="http://startbootstrap.com/template-overviews/creative/" class="btn btn-default btn-xl sr-button">Download Now!</a>
            </div>
        </div>
    </aside>
*/
    ?>

    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">Contact me</h2>
                    <hr class="primary">
                    <p>My phone and my email are these :)</p>
                </div>
                <div class="col-lg-4 col-lg-offset-2 text-center">
                    <i class="fa fa-phone fa-3x sr-contact"></i>
                    <p><a href="tel:+55 (34) 99969-2390">+55 (34) 99969-2390</a></p>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:contato@felipeluis.com.br">contato@felipeluis.com.br</a></p>
                </div>
            </div>
        </div>
    </section>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="js/scrollreveal.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/jquery.fittext.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="js/creative.js"></script>

</body>

</html>



<?
/*
<h1>Felipe Luis - Web Designer / Developer / Photographer</h1>
<nav>
    <ul>
        <li><a href="https://www.facebook.com/FelipeL.Silva" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/felipeluiss/" target="_blank">Instagram</a></li>
        <li><a href="https://twitter.com/FelipeLuisSS" target="_blank">Twitter</a></li>
        <li><a href="https://plus.google.com/u/1/+FelipeLuisSSilva/posts" target="_blank">Google+</a></li>
        <li><a href="https://br.linkedin.com/in/felipelssilva" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.behance.net/felipeluiss" target="_blank">Behance</a></li>
        <li><a href="https://br.pinterest.com/felipelsilva/" target="_blank">Pinterest</a></li>
        <li><a href="https://www.youtube.com/c/felipeluisssilva" target="_blank">YouTube</a></li>
    </ul>
</nav>
*/
?>