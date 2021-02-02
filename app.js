let arrCards = [];                              

const drawCard = (num, sym, col) => {         //array que contendrá el numero, palo, color de la carta
    let card = document.createElement("div");   //creamos un div para hacer la carta
    card.classList.add("card");                 //asignamos una clase tipo carta
    card.classList.add("mt-3");                 // margen top
    card.classList.add("ml-3");                 //margen izquierdo
    if (num == 13) {
        let k = "K";            //Si la carta es numero 13 se entendera como Rey "K" 
        card.innerHTML = `
        <p id="sharpTop" class="text-left mr-1 mt-2 ${col}">${sym}</p>
        <h1 id="numBody" class="text-center">${k}</h1>
        <p id="sharpBottom" class="text-right mr-1 mb-2 ${col}">${sym}</p>
`;
    } else if (num == 12) {      //en caso de ser 12 se entendera como Queen "Q"
        let q = "Q";
        card.innerHTML = `
        <p id="SharpTop" class="text-left mr-1 mt-2 ${col}">${sym}</p>
        <h1 id="numBody" class="text-center">${q}</h1>
        <p id="sharpBottom" class="text-right mr-1 mb-2 ${col}">${sym}</p>
`;
    } else if (num == 11) {      //en caso de ser 11 se entenderá como Jota "J"
        let j = "J";
        card.innerHTML = `
        <p id="sharpTop" class="text-left mr-1 mt-2 ${col}">${sym}</p>
        <h1 id="numBody" class="text-center">${j}</h1>
        <p id="sharpBottom" class="text-right mr-1 mb-2 ${col}">${sym}</p>
`;
    } else if (num == 1){                               
        let ace = "A";           //en caso de ser 1 se entenderá como As "A"
        card.innerHTML = `
        <p id="sharpTop" class="text-left mr-1 mt-2${col}">${sym}<p/>
        <h1 id="numBody"class=text-center>${ace}<h1>
        <p id="sharpBottom" class="text-left mr-1 mt2${col}">${sym}</p>
        `;
    }   
        return card;
}

function InputNumber() 
{
    let cardInput = document.getElementById("theBtn"); //obtenemos input de texto para el numero de cartas para empezar la condicion
    if(cardInput == "")
    {
        alert("Por favor ingresa un numero"); //alerta en caso de vacio
    }
    else{
        for( let i = 1; i <= cardInput; i++); //en el caso que el 1 sea menor que el numero de cartas ingresado
        let cardNum = [2,3,4,5,6,7,8,9,10,11,12,13,1]; //arreglo con el numero de las cartas
        let randCard = Math.floor(Math.random() * cardNum.length); // Contiene el random de las cartas.
        let cardSharp = ["♠", "♣", "♥", "♦"]; //palos
        let randSharp = Math.floor(Math.random() * cardSharp.length); //Contiene el random de los palos.
        if (randSharp == 2 || randSharp == 3)
        {
                classColor = "redColor"                                //condicion de asignacion de los colores. Rojo a las posiciones [2][3] Corazones-Oros
        }else
        {
                classColor ="blackColor"                              //condicion de asignacion de los colores. Negro a las posiciones [0][1] Bastos-Treboles
        }
        let cardDivSelector = querySelector(".cards");                  //Obtenemos el elemento de la carta de tipo de ID creado al principio
        cardDivSelector.appendChild()
    }

}       //fin condicion InputNumber /