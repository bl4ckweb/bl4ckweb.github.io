const btn = document.getElementById('submit');
function wsp()
{
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let mensaje = document.getElementById('mensaje');
    let numero = document.getElementById('numero');

    window.open(`https://api.whatsapp.com/send?phone=51973988036&text=Hola%20mi%20nombre%20es%20${nombre}%20,mi%20correo%20es%20${email}%20mi%20teléfono%20es%20${numero}%20y%20${mensaje}`,'_blank')
}
