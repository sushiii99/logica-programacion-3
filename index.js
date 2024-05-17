// Solicitar un número al usuario -> esto puede hacerse en una linea sin funcion
// identificar si el dato de entrada es de tipo number, 
//en caso contrario debe mandar un mensaje de error y volver a solicitar el dato. -> esto requiere una funcion


document.addEventListener("DOMContentLoaded", function(){ // FUNCION PARA IMPRMIR EN DOM

function solicitarNumero() {
    let numero = Number(prompt("Por favor, ingresa un número entero: "));
    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {  // Identifica si es entero y no negativo
        return numero;
    } else {
        alert("Entrada inválida. Por favor, ingresa un número entero válido.");
        return solicitarNumero();  // Devuelve el valor retornado por la llamada recursiva, si no lo pongo no se guarda el nuevo valor!
    }
}
    
// calcular el factorial del número recibido: n! = n * (n-1) * ...* 2 * 1
function factorial(n) {
    if (n === 0 || n === 1) { //caso base 0 y 1
        return 1;
    }
    let fact = 1; // necesario para acumular el resultado
    for (let i = 2; i <= n; i++) { // i se inicia en 2 y se incrementa en 1, hasta llegar a n
        fact *= i; // se multiplica por i y se guarda el resultado
    }
    return fact;
}

// esto es para que se muestre en html
function mostrarResultado(resultado) {
    const resultadoDiv = document.getElementById("result"); // id result de la pagina html
    resultadoDiv.textContent = `El factorial es: ${resultado}`; //Cambia el contenido de texto de resultadoDiv para mostrar el mensaje
}

// llamar funciones
const numero = solicitarNumero();
const fact = factorial(numero);
mostrarResultado(fact); //  Muestra el resultado del factorial en el DOM.
});




//  imprimir el resultado por el DOM de un archivo index.html -> INVESTIGAR




// DOMContentLoaded: Es un evento que se dispara cuando el documento HTML ha sido completamente cargado y parseado, 
// sin esperar a que las hojas de estilo, imágenes y subframes terminen de cargar.


