

    const display = document.querySelector('.solucion');
    const numeros = document.getElementsByClassName('num1');

    const arraynumeros = Array.from(numeros);


    arraynumeros.forEach((pito)=>{

        pito.addEventListener('click', ()=>{
              calculadora(pito, display)
        });



    });

function calculadora (pito, display){

    switch (pito.innerHTML){
        case 'c':
            borrar(display);
            break;

            case '=':
                calcular(display);
                break;

                default:
                    actualizar(display, pito);
                    break;
    }
}

function calcular(mojito){
   mojito.innerHTML= eval(mojito.innerHTML);

}

function  actualizar(display, pito){

    if(display.innerHTML== 0){
        display.innerHTML = '';
    }
    display.innerHTML += pito.innerHTML;
}

function borrar (display){
display.innerHTML = '';
}