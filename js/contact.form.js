$(document).ready(function(){
            $('#formcontato').validate({
                rules: {
                    nome: { required: true, minlength: 2 },
                    email: { required: true, email: true },
                    assunto: { required: true },
                    mensagem: { required: true, minlength: 30 }
                },
                messages: {
                    nome: { required: 'Preencha o campo nome', minlength: 'No mínimo 2 letras' },
                    email: { required: 'Informe o seu email', email: 'Ops, informe um email válido' },
                    assunto: { required: 'Nos diga o assunto' },
                    mensagem: { required: 'Escreva uma mensagem', minlength: 'Diga-me mais coisas, poucas informações no contato não enviará (30 letras)'}
                },
                submitHandler: function( form ){
                    var dados = $( form ).serialize();

                    $.ajax({
                        type: "POST",
                        url: "ContatoEnviar.php",
                        data: dados,
                        success: function( data )
                        {
                            alert( data );
                        }
                    });

                    return false;
                }
            });
        });