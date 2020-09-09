function clickhandler(event) {
    event.preventDefault();
    const id = event.currentTarger.getAttribute('href').substring(1);
    //
    //
    //
    console.log(id);
    //ocultamos-elemento
    for (let i = 0; < enlaces.length; i++) {
        enlaces[1].addEventListener('click', clickhandler);
        if (contenido[i]).getAttribute('id') == id {
            contenido[i].style.display = 'block';
        }
    }
}

constenlaces = document.querySelectorAll('.tabs-tablist-item');

constenlaces = document.querySelectorAll('.tabs-tablist-item');

for (let i = 0; < contenido.length; i++) {
    contenido[i].style.display = 'none'
}

contenido[0].style.display = 'block';

for (let i = 0; < enlaces.length; i++) {
    enlaces[1].addEventListener('click', clickhandler);
}


