const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const trocar = document.getElementById('trocar');
const lamp = document.getElementById ('lamp');

function checarQuebrada () {
    return lamp.src.indexOf('quebrada') > - 1
}

function lampOn () {
    if (!checarQuebrada()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff () {
    if (!checarQuebrada()) {
        lamp.src = './img/desligada.jpg'
    }
}

function quebrarLamp () {
   lamp.src = './img/quebrada.jpg'

}

function arruma () {
    if (checarQuebrada()) {
        lamp.src = './img/desligada.jpg'
    }
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
trocar.addEventListener('click', arruma)
lamp.addEventListener('dblclick', quebrarLamp)