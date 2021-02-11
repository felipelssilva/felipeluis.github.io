const self = this;

document.addEventListener("DOMContentLoaded", function() {
    const $doc = $(document),
        aboutMeContainer = $doc.find('.js-about-me');

    self.loadeContainers({ doc: $doc, container: aboutMeContainer });
});


function loadeContainers(handlers) {
    $.ajax({
            type: 'GET',
            url: self.getApiUrl(handlers),
            headers: {
                'x-access-token': getCookie('x-access-token')
            },
            beforeSend: () => {
                handlers.container.html('<i class="fas fa-circle-notch fa-spin fa-3x"></i>');
            }
        })
        .done(function(data) {
            let html = '',
                buttons = `
                    <div class="my-3 text-right">
                        <button class="btn btn-success js-save-about-me">Salvar Sobre min</button>
                    </div>
                `;

            data.forEach(element => {
                html = `
                    <label for="aboutme">Sobre min</label>
                    <input type="hidden" value="${element._id}" id="id" name="id">
                    <textarea class="form-control" id="aboutme" name="aboutme">
                        ${element.description}
                    </textarea>
                    `;
            });

            handlers.container.html(`<form>${html + buttons}</form>`);

            tinymce.init({
                selector: 'textarea',
                plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help  charmap quickbars code',
                mobile: {
                    plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars'
                },
                menubar: 'file edit view insert format tools table tc help',
                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange  removeformat | pagebreak | charmap | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | code',
                image_advtab: true,
                content_css: '//www.tiny.cloud/css/codepen.min.css',
                height: 250,
                image_caption: true,
                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                toolbar_mode: 'sliding',
                contextmenu: "link image imagetools table",
                a11y_advanced_options: true,
            });

            $(handlers.container).attr('data-type', 'about-me-save');
            handlers.doc.on('submit', 'form', e => save(e, handlers));


        })
        .fail(function(err) {
            toast({ data: err, type: 'error' });
        })
        .always(function() {
            // handlers.container.find('table').DataTable({ "order": [[1, "desc"]] });
        });
}

function getApiUrl(handlers) {
    let type = $('.js-about-me').attr('data-type'),
        url = '';

    switch (type) {
        case 'about-me':
            url = '/api/about';
            break;
        case 'about-me-save':
            url = `/api/about/${handlers.id}/save`;
            break;
        default:
            url = '';
            break;
    }

    return url;
}

function save(evt, handlers) {
    evt.stopPropagation();
    evt.preventDefault();

    const _self = this,
        $form = handlers.doc.find('form'),
        data = {
            description: tinymce.activeEditor.getContent()
        };

    handlers.id = $form.find('input[name=id]').val().trim();

    $form.find('button.js-save-about-me').attr('disabled', true);
    $form.find('button.js-save-about-me').append('<span>&nbsp;<i class="fas fa-circle-notch fa-spin"></i></span>');

    $.ajax({
            type: 'PUT',
            headers: {
                'x-access-token': getCookie('x-access-token')
            },
            data: data,
            url: self.getApiUrl(handlers),
        })
        .done(function(data) {
            toast({ data: data, type: 'success' });

            // window.onbeforeunload = false;

            // setTimeout(() => {
            //     window.location.href = '/secure/blogs';
            // }, 2000);
        })
        .fail(function(err) {
            toast({ data: err, type: 'error' });
        })
        .always(function() {
            $form.find('button.js-save-about-me').removeAttr('disabled');
            $form.find('button.js-save-about-me span').remove();
        });

}