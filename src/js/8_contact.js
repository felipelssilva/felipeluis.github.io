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
                nome: {
                  required: 'Fill in the field name',
                  minlength: 'At least 2 letters'
                },
                email: {
                  required: 'Enter your email',
                  email: 'Oops, fill in a valid email address'
                },
                assunto: {
                  required: 'Tell us the subject'
                },
                mensagem: {
                  required: 'Write a message',
                  minlength: 'Tell me more things, little information on the contact will not send (30 letters)'
                },
            },
            submitHandler: function( form ){
                $dados = $( form ).serialize();
                $thisForm = $('#formcontato input, select, textarea');
                $url = window.location.href + 'src/sendContact.php';

                $.ajax({
                    type: "POST",
                    url: $url,
                    data: $dados,
                    success: function(data){
                        swal(data.title, data.body, "success");
                    },
                    error: function(data){
                        swal(data.title, data.body, "error");
                    },
                    beforeSend: function(data) {
                        $thisForm.val('');
                        $('body,html').animate({scrollTop: $('#social-medias').position().top}, 800);
                    }
                });

                return false;
            }
        });
    } else {
        e.preventDefault();
        e.stopPropagation();
        swal("Oops!", "All fields are required, please try again with more information", "error");
    }
});
