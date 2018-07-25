$('button[name=send]').on('click', function(e) {
    let recaptcha = $('textarea#g-recaptcha-response').val();

    if (recaptcha) {
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
                var dados = $( form ).serialize();

                $.ajax({
                    type: "POST",
                    url: "sendContact.php",
                    data: dados,
                    success: function( data )
                    {
                        alert( data );
                    },
                    beforeSend: function(data){ console.log("beforeSend "+data); swal("Hello world!"); },
                    complete: function(data){ console.log("complete "+data); }
                });

                return false;
            }
        });
    } else {
        e.preventDefault();
        e.stopPropagation();
        alert( "Recaptcha é obrigatório" );
    }
});