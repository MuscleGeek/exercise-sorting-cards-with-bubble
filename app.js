let myCards = [];

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
        <p id="sharpTop" class="text-left mr-1 mt-2 ${col}">${sym}</p>
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
    } else if (num == 1) {
        let ace = "A";           //en caso de ser 1 se entenderá como As "A"
        card.innerHTML = `
        <p id="sharpTop" class="text-left mr-1 mt-2 ${col}">${sym}</p>
        <h1 id="numBody"class="text-center">${ace}</h1>
        <p id="sharpBottom" class="text-right mr-1 mb-2 ${col}">${sym}</p>
        `;
    } else {
        card.innerHTML = `
        <p id="sharpTop" class="text-left mr-1 mt-2 ${col}">${sym}</p>
        <h1 id="numBody" class="text-center">${num}</h1>
        <p id="sharpBottom" class="text-right mr-1 mb-2 ${col}">${sym}</p>
        `;
    }
    return card;
}

function inputCards()     /*Funcion correspondiente al ingresar el numero de cards (DRAW)*/ {
    let cardInput = document.getElementById("inputText").value;    //obtenemos input de texto para el numero de cartas para empezar la condicion
    if (cardInput == "") {
        alert("Por favor ingresa un numero");   //alerta en caso de vacio
    } else {
        for (let c = 1; c <= cardInput; c++)
        { //en el caso que el 1 sea menor que el numero de cartas ingresado
            let cardNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];  //arreglo con el numero de las cartas
            let cardSharp = ["♠", "♣", "♥", "♦"]; // arreglo de palos
            let randNum = Math.floor(Math.random() * cardNum.length);  // Contiene el random de los numeros de las cartas.
            let randSharp = Math.floor(Math.random() * cardSharp.length); //Contiene el random de los palos.
            if (randSharp == 2 || randSharp == 3) {
                classColor = "redColor";          //condicion de asignacion de los colores. Rojo a las posiciones [2][3] Corazones-Oros
            } else {
                classColor = "blackColor";        //condicion de asignacion de los colores. Negro a las posiciones [0][1] Bastos-Treboles
            }
            let divDraw = document.querySelector(".kardDrawBox");                 //Obtenemos el div en donde se mostaran el numero de cartas aleatoria escogidas por el usuario
            divDraw.appendChild(drawCard(cardNum[randNum], cardSharp[randSharp], classColor));   //Adjuntamos los el draw de cartas del select ".cards" y adjuntamos las cartas generadas
            myCards.push({ "cNumber": cardNum[randNum], "cSharp": cardSharp[randSharp], "cColor": classColor });      //incrustamos las cartas generadas por medio del metodo push
            /*console.log(myCards); /*probando--- condicion ---*/
        }
    }
}       //END Funcion asignada al input DRAW /

//Funcion para el dirigida al boton SORT para generar el ordenamiento

const sortCards = () => {    /* Funcionalidad para el botón SORT*/

    let newCardArr = myCards.slice(); //seteamos nuestro nuestro nuevo arreglo con una nueva copia con el array que contiene las cartas generadas anteriormente por el usuario
    bubbleSort(newCardArr); //ejecutamos el ordenamiento de burbuja para la copia del arreglo basado en la comparacion y cambio de posiciones.
    console.log(myCards);       //mostramos el arreglo que contiene los numeros cartas del DRAW
    console.log(newCardArr);        //mostramos el areglo ordenado de los numeros cartas
}

const bubbleSort = (arr) => {
    console.log(arr.length);    //muestra la longitud del array
    let wall = arr.length - 1; //posicionarse en la ultima posición
    while (wall > 0) {
        let index = 0;
        while (index < wall) //mientras index sea menor a la ultima posicion
        {
            if (arr[index].cNumber > arr[index + 1].cNumber) //cambio de posición
            {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
                for (let z = 0; z < arr.length; z++) {
                    console.log(arr[z]);
                    let divSort = document.querySelector(".kardSortBox"); //Se obtiene el ID containerSort)/
                    divSort.appendChild(drawCard(arr[z].cNumber, arr[z].cSharp, arr[z].cColor)); //incrustamos nuestro algoritmo el div de card-sort on el ordenamiento correspondiente
                    if (z == arr.length - 1) { //si z last[]//
                        let brLine = document.createElement("br"); //creamos salto de linea
                        divSort.appendChild(brLine);
                    }
                }
            }
            index++; //así nuestro index incrementará
        }
        wall--; //así nuestro wall decrementará
    }
    return arr; //volvemos arr
};