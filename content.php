<section id="about-me">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 offset-lg-2 text-center">
				<h2 class="section-heading">About Me</h2>
				<hr class="light">
				<p class="lead">
					I'm working on front-end development in Brazilian and European e-commerce territory with B2B and B2C projects, using the SAP C / 4HANA platform. jQuery, JavaScript (Vanilla, ES6), React, Angular, Grunt, Gulp, SASS, Less, CSS3 are some of the programming languages that ​​I have daily contact. Let's talk?
				</p>
				<a href="#contact" class="js-scroll-trigger btn btn-primary btn-lg">Send me a message</a>
			</div>
		</div>
	</div>
</section>

<section id="social-medias">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 offset-lg-2 text-center">
				<h2 class="section-heading">My Social Medias \o/</h2>
				<hr class="light">
				<!-- p class="text-faded"></p -->
				<nav class="offset-md-1 social-medias">
					<ul>
						<li><a href="https://bit.ly/2JQla2m" rel="noreferrer" target="_blank"><i class="fa fa-facebook-official fa-4x sr-icons" rel="tooltip" title="Facebook"></i></a></li>
						<li><a href="https://bit.ly/2VKCNYq" rel="noreferrer" target="_blank"><i class="fa fa-instagram fa-4x sr-icons" rel="tooltip" title="Instagram"></i></a></li>
						<li><a href="https://bit.ly/2HqfB8X" rel="noreferrer" target="_blank"><i class="fa fa-twitter-square fa-4x sr-icons" rel="tooltip" title="Twitter"></i></a></li>
						<!-- <li><a href="http://goo.gl/dGCx8w" target="_blank"><i class="fa fa-google-plus-square fa-4x sr-icons" rel="tooltip" title="Google+"></i></a></li> -->
						<li><a href="https://bit.ly/2HpsobL" rel="noreferrer" target="_blank"><i class="fa fa-linkedin-square fa-4x sr-icons" rel="tooltip" title="LinkedIn"></i></a></li>
						<!-- <li><a href="http://goo.gl/bX3ltl" target="_blank"><i class="fa fa-behance-square fa-4x sr-icons" rel="tooltip" title="Behance"></i></a></li> -->
						<li><a href="https://bit.ly/2EluK9Q" rel="noreferrer" target="_blank"><i class="fa fa-github-square fa-4x sr-icons" rel="tooltip" title="GitHub"></i></a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</section>

<section id="contact">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 offset-lg-2 text-center">
				<h2 class="section-heading">My contact</h2>
				<hr class="primary">
				<p>My email :)</p>
			</div>
			<?php
			/*
			 <div class="col-lg-4 offset-lg-2 text-center">
				<i class="fa fa-phone fa-3x sr-contact"></i>
				<p><a href="tel:+55 (41) 99809-0620">+55 (41) 99809-0620</a></p>
			</div>
			*/
			?>
			<div class="col-sm-12 text-center">
				<i class="fa fa-envelope-o fa-3x sr-contact"></i>
				<p><a href="mailto:contato@felipeluis.com.br">contato@felipeluis.com.br</a></p>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-8 offset-lg-2 text-center">
				<hr class="primary">
				<p>You can also send me a message by this contact below!</p>
			</div>

			<form name="formcontato" id="formcontato" method="post" action="mailto:contato@felipeluis.com.br" class="col-lg-8 offset-lg-2 form-horizontal">
				<div class="form-group row">
					<label for="nome" class="col-xs-10 offset-xs-1 col-md-2 offset-md-0 control-label">Your name</label>
					<div class="col-xs-10 offset-xs-1 col-md-9 offset-md-0">
						<input class="form-control" name="nome" type="text" id="nome" size="20" required="required" placeholder="Your name here" />
					</div>
				</div>
				<div class="form-group row">
					<label for="email" class="col-xs-10 offset-xs-1 col-md-2 offset-md-0 control-label">Your e-mail</label>
					<div class="col-xs-10 offset-xs-1 col-md-9 offset-md-0">
						<input class="form-control" name="email" type="email" id="email" size="20" required="required" placeholder="email@server.com" />
					</div>
				</div>
				<div class="form-group row">
					<label for="assunto" class="col-xs-10 offset-xs-1 col-md-2 offset-md-0 control-label">Subject</label>
					<div class="col-xs-10 offset-xs-1 col-md-9 offset-md-0">
						<select class="form-control" name="assunto" id="assunto" required>
							<option selected>--- Choose an option ---</option>
							<option value="Doubts">Doubts</option>
							<option value="Suggestions">Suggestions</option>
							<option value="Claims">Claims</option>
							<option value="Testimonial">Testimonial</option>
							<option disabled> ------ </option>
							<option value="Development">Development</option>
							<option value="Design">Design</option>
							<option disabled> ------ </option>
							<option value="Others">Others</option>
						</select>
					</div>
				</div>
				<div class="form-group row">
					<label for="mensagem" class="col-xs-10 offset-xs-1 col-md-2 offset-md-0 control-label">Message</label>
					<div class="col-xs-10 offset-xs-1 col-md-9 offset-md-0">
						<textarea class="form-control" name="mensagem" id="mensagem" required rows="8"></textarea>
					</div>
				</div>
				<div class="form-group row">
					<div class="offset-xs-1 col-xs-10 col-md-9 offset-md-2">
						<div id="recaptcha" class="g-recaptcha" data-sitekey="6LeN7WQUAAAAACIN69-HcevBNdTPCC-DIshNvch4"></div>
					</div>
				</div>
				<div class="form-group row">
					<div class="offset-xs-1 col-xs-10 col-md-9 offset-md-2">
						<button name="send" type="submit" class="btn btn-primary btn-lg">Send contact!</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	</div>
</section>