this.imageHasUploaded = false;
this.imageUrl = '';

document.addEventListener("DOMContentLoaded", function () {
    const _doc = $(document),
    _projectsContainer = _doc.find('.js-projects-add'),
    _self = this;
    
    window.onbeforeunload = function (e) {
        return 'Tem a certeza que quer fechar a janela?';
    };
    
    tinymce.init({
        selector: 'textarea',
        plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help  charmap quickbars code',
        mobile: {
            plugins: 'print preview searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars code'
        },
        menubar: 'file edit view insert format tools table tc help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor casechange  removeformat | pagebreak | charmap | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | code',
        image_advtab: true,
        content_css: '//www.tiny.cloud/css/codepen.min.css',
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        height: 300,
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        toolbar_mode: 'sliding',
        contextmenu: "link image imagetools table",
        a11y_advanced_options: true,
    });
    
    _doc.on('submit', 'form', e => save(e));
    
    loadOrder();
});

function save(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    
    const _self = this;
    
    _self.uploadImage();
}

function uploadImage() {
    const self = this;
    let photo = document.getElementById("img").files[0];
    let formData = new FormData();
    
    formData.append("image", photo, photo.name);
    
    fetch('/api/upload/image', {method: "POST", body: formData})
    .then(res => res.json())
    .then(res => {
        self.imageHasUploaded = true;
        self.imageUrl = res.image_url;
        self.send();
    })
    .catch(err => imageHasUploaded = false);
}

function send() {
    const _doc = $(document),
    _self = this,
    $form = _doc.find('form'),
    data = {
        name: $form.find('input[name=name]').val().trim(),
        url: $form.find('input[name=url]').val().trim(),
        img: _self.imageUrl,
        description: tinymce.activeEditor.getContent(),
    };
    
    if(_self.imageHasUploaded) {
        $.ajax({
            type: 'PUT',
            headers: {
                'x-access-token': getCookie('x-access-token')
            },
            data: data,
            url: "/api/projects/add",
        })
        .done(function (data) {
            toast({ data: data, type: 'success' });
            
            window.onbeforeunload = false;
            
            setTimeout(() => {
                window.location.href = '/secure/projects';
            }, 2000);
        })
        .fail(function (err) {
            toast({ data: err, type: 'error' });
        })
        .always(function () {
        });
    }
}

function loadOrder(){
    const _doc = $(document),
    _orderContainer = _doc.find('.js-order'),
    _self = this;
    
    fetch('/api/projects', {method: "GET"})
    .then(res => res.json())
    .then(res => {
        let qty = res.length;
        let select = _orderContainer.find('select');
        
        res.forEach((element, i) => {
            select.append(`<option value="${i}">${i}</option>`)
        });
        
        select.append(`<option selected value="${qty}">${qty}</option>`)
        
    })
    .catch(err => console.error(err));
}