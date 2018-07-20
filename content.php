<? /*
	<header>
		<div class="header-content">
			<div class="header-content-inner">
				<h1><img alt="Felipe Luis" src="/img/logo-felipe-luis-menor.png" width="300" height="118" class="sr-top" /></h1>
				<hr class="sr-top">
				<p class="sr-top"> Web Designer / Desenvolvedor / Fotógrafo </p>
				<a href="#contact" class="btn btn-primary btn-xl page-scroll sr-top">Entre em contato</a>
			</div>
		</div>
	</header>
*/ ?>

<section class="bg-primary"  id="social-medias">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 text-center">
				<h2 class="section-heading">Minhas redes sociais \o/</h2>
				<hr class="light">
				<!-- p class="text-faded"></p -->
				<nav class="social-medias">
					<ul>
						<li><a href="http://goo.gl/G81gHA" target="_blank"><i class="fa fa-facebook-official fa-4x sr-icons" rel="tooltip" title="Facebook"></i></a></li>
						<li><a href="http://goo.gl/1idPCJ" target="_blank"><i class="fa fa-instagram fa-4x sr-icons" rel="tooltip" title="Instagram"></i></a></li>
						<li><a href="http://goo.gl/HFlSBu" target="_blank"><i class="fa fa-twitter-square fa-4x sr-icons" rel="tooltip" title="Twitter"></i></a></li>
						<li><a href="http://goo.gl/dGCx8w" target="_blank"><i class="fa fa-google-plus-square fa-4x sr-icons" rel="tooltip" title="Google+"></i></a></li>
						<li><a href="http://goo.gl/2ymDsu" target="_blank"><i class="fa fa-linkedin-square fa-4x sr-icons" rel="tooltip" title="LinkedIn"></i></a></li>
						<li><a href="http://goo.gl/bX3ltl" target="_blank"><i class="fa fa-behance-square fa-4x sr-icons" rel="tooltip" title="Behance"></i></a></li>
						<li><a href="http://goo.gl/33PZBc" target="_blank"><i class="fa fa-github-square fa-4x sr-icons" rel="tooltip" title="GitHub"></i></a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</section>
<section id="contact">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 text-center">
				<h2 class="section-heading">Contatos</h2>
				<hr class="primary">
				<p>Meu telefone e meu email :)</p>
			</div>
			<div class="col-lg-4 col-lg-offset-2 text-center">
				<i class="fa fa-phone fa-3x sr-contact"></i>
				<p><a href="tel:+55 (41) 99809-0620">+55 (41) 99809-0620</a></p>
			</div>
			<div class="col-lg-4 text-center">
				<i class="fa fa-envelope-o fa-3x sr-contact"></i>
				<p><a href="mailto:contato@felipeluis.com.br">contato@felipeluis.com.br</a></p>
			</div>
		</div>

		<div>
			<div class="col-lg-8 col-lg-offset-2 text-center">
				<hr class="primary">
				<p>Você também pode me enviar uma mensagem por este contato abaixo!</p>
			</div>
			<br clear="all">
			<form name="formcontato" id="formcontato" method="post" action="" class="form-horizontal">
				<div class="form-group">
					<label for="inputNome" class="col-xs-10 col-xs-offset-1 col-md-2 col-md-offset-0 control-label">Seu nome</label>
					<div class="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-0">
						<input class="form-control" name="nome" type="text" id="nome" size="20" required="required" placeholder="Fulano de Tal da Silva" />
					</div>
				</div>
				<div class="form-group">
					<label for="inputEmail" class="col-xs-10 col-xs-offset-1 col-md-2 col-md-offset-0 control-label">Seu e-mail</label>
					<div class="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-0">
						<input class="form-control" name="email" type="email" id="email" size="20" required="required" placeholder="email@servidor.com" />
					</div>
				</div>
				<div class="form-group">
					<label for="inputAssunto" class="col-xs-10 col-xs-offset-1 col-md-2 col-md-offset-0 control-label">Assunto</label>
					<div class="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-0">
						<select class="form-control" name="assunto" id="assunto" required>
							<option selected>--- Escolha uma opção ---</option>
							<option value="Duvidas">Dúvidas</option>
							<option value="Sujestoes">Sujestões</option>
							<option value="Reclamacoes">Reclamações</option>
							<option value="Depoimentos">Depoimentos</option>
							<option> ------ </option>
							<option value="Desenvolvimento">Desenvolvimento</option>
							<option value="Design">Design</option>
							<option value="Fotografia">Fotografia</option>
							<option> ------ </option>
							<option value="Outros">Outros</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label for="inputMensagem" class="col-xs-10 col-xs-offset-1 col-md-2 col-md-offset-0 control-label">Mensagem</label>
					<div class="col-xs-10 col-xs-offset-1 col-md-9 col-md-offset-0">
						<textarea class="form-control" name="mensagem" id="mensagem" required rows="8"></textarea>
					</div>
				</div>
				<div class="form-group">
					<div class="col-xs-offset-1 col-xs-10 col-md-9 col-md-offset-2">
						<div id="recaptcha" class="g-recaptcha" data-sitekey="6LeN7WQUAAAAACIN69-HcevBNdTPCC-DIshNvch4"></div>
					</div>
				</div>
				<div class="form-group">
					<div class="col-xs-offset-1 col-xs-10 col-md-9 col-md-offset-2">
						<button name="send" type="submit" class="btn btn-primary btn-lg">Enviar contato!</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
</section>