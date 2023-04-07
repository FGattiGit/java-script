


let numberOfDrumnbotons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumnbotons; i++) {


    document.querySelectorAll('button')[i].addEventListener('click', function(){

        let buttonInnerHTML = this.innerHTML

        fazerSom(buttonInnerHTML)

        buttonAnime(buttonInnerHTML)
    })
    
    
}

document.addEventListener('keydown', function(event) {
    fazerSom(event.key)

    buttonAnime(event.key)
})

function fazerSom(key) {

    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
    
            case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

            case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

            case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

            case 'j':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

            case 'k':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

            case 'l':
            let kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default: console.log(buttonInnerHTML)
            break;
    }
    

}

function buttonAnime(chave) {

    let buttonAtivo = document.querySelector('.' + chave)

    buttonAtivo.classList.add('pressed')

   setTimeout( function(){
    buttonAtivo.classList.remove('pressed')
   }, 100)
}

/*

document.querySelector('button').addEventListener('click', handleClick)

                                // Primeira maneira de fazer função click
function handleClick(){
    alert('clicou')
}
    
document.querySelector('.a').addEventListener('click', function(){

                                // Segunda maneira de faer função click
    alert('clicou 2') 
})

*/

