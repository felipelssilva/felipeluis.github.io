$('button[name=send]').on('click', e => {
    let $recaptcha = $('#formcontato textarea#g-recaptcha-response').val(),
        $nome = $('#formcontato input#nome').val(),
        $email = $('#formcontato input#email').val(),
        $assunto = $('#formcontato select#assunto').val(),
        $mensagem = $('#formcontato textarea#mensagem').val();

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
            submitHandler: form => {
                $dados = $(form).serialize();
                $thisForm = $('#formcontato input, select, textarea');
                $url = '/src/sendContact.php';

                $.ajax({
                    type: "POST",
                    url: $url,
                    data: $dados,
                    success: data => {
                        if (data.type === 'success') {
                            swal.fire(data.title, data.body, "success");
                            $thisForm.val('');
                            $('body,html').animate({ scrollTop: $('#social-medias').position().top }, 600);
                        } else {
                            swal.fire(data.title, data.body, "error");
                        }
                    },
                    error: data => swal.fire(data.title, data.body, "error")
                });

                return false;
            }
        });
    } else {
        e.preventDefault();
        e.stopPropagation();
        swal.fire("Oops!", "All fields are required, please try again with more information", "error");
    }
});
