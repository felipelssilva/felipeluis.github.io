exports.LOG = (message) => {
    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        seconds: '2-digit'
    },
    date = new Date(Date.now()).toLocaleDateString('pt-br', options),
    spacer = '    ';
    
    console.log(date + spacer + message);
}
