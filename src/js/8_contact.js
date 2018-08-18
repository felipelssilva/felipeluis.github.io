$('button[name=send]').on('click', function(e) {
    let $recaptcha = $('#formcontato textarea#g-recaptcha-response').val();
    let $nome = $('#formcontato input#nome').val();
    let $email = $('#formcontato input#email').val();
    let $assunto = $('#formcontato select#assunto').val();
    let $mensagem = $('#formcontato textarea#mensagem').val();

    if (!!$recaptcha && !!$nome && !!$email && !!$assunto && !!$mensagem) {
        $('#formcontato').validate({
            rules: {
                nome: { required: true, minlength: 2 },
                email: { required: true, email: true },
                assunto: { required: true },
                mensagem: { required: true, minlength: 30 },
            },
            messages: {
                nome: { required: 'Preencha o campo nome', minlength: 'No mínimo 2 letras' },
                email: { required: 'Informe o seu email', email: 'Ops, informe um email válido' },
                assunto: { required: 'Nos diga o assunto' },
                mensagem: { required: 'Escreva uma mensagem', minlength: 'Diga-me mais coisas, poucas informações no contato não enviará (30 letras)'},
            },
            submitHandler: function( form ){
                $dados = $( form ).serialize();
                $thisForm = $('#formcontato input, select, textarea');

                $.ajax({
                    type: "POST",
                    url: "/src/sendContact.php",
                    data: $dados,
                    success: function(data){
                        swal(data.title, data.body, "success");
                    },
                    error: function(data){
                        swal(data.title, data.body, "error");
                    },
                    beforeSend: function(data) {
                        $thisForm.val('');
                        document.documentElement.scrollTop = $("#social-medias").position().top 
                    }
                });

                return false;
            }
        });
    } else {
        e.preventDefault();
        e.stopPropagation();
        swal("Oops!", "Todos os campos são obrigatórios, tente novamente com mais informações", "error");
    }
});