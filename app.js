// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array global para almacenar los nombres de los amigos
let nombres = [];

// Función para agregar un nombre al array y actualizar la lista en la página
function agregarAmigo() {
    // Obtiene el valor del campo de texto, eliminando espacios en blanco al inicio y final
    let nombre = document.getElementById('amigo').value.trim();

    // Valida que el campo de texto no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        // Agrega el nombre al array
        nombres.push(nombre);
        // Limpia el campo de texto después de agregar el nombre
        document.getElementById('amigo').value = '';
    }

    // Llama a la función para actualizar la lista de amigos en el HTML
    listaAmigos(nombres, 'listaAmigos');
}

// Función para mostrar los nombres del array en una lista HTML
function listaAmigos(nombres, idLista) {
    // Obtiene el elemento de la lista por su ID
    let lista = document.getElementById(idLista);
    // Limpia la lista antes de agregar los nuevos elementos para evitar duplicados
    lista.innerHTML = '';

    // Itera sobre el array de nombres
    nombres.forEach(nombre => {
        // Crea un nuevo elemento de lista (<li>)
        let item = document.createElement('li');
        // Asigna el nombre como texto del elemento
        item.textContent = nombre;
        // Agrega el elemento a la lista HTML
        lista.appendChild(item);
    });
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
    // Valida que haya al menos un nombre en el array para sortear
    if (nombres.length === 0) {
        alert('No hay amigos para hacer el sorteo');
    } else {
        // Obtiene los elementos de la lista de amigos y el resultado
        let listaAmigosElement = document.getElementById('listaAmigos');
        let resultadoElement = document.getElementById('resultado');

        // Genera un índice aleatorio basado en el tamaño del array
        let numRandom = Math.floor(Math.random() * nombres.length);
        // Obtiene el nombre del amigo sorteado usando el índice aleatorio
        let amigoSecreto = nombres[numRandom];

        // Limpia la lista de amigos para que no se muestre después del sorteo
        listaAmigosElement.innerHTML = '';
        // Muestra el nombre del amigo sorteado en el elemento de resultado
        // Nota: se usa += para agregar el resultado, si solo se quiere el último, usa =
        resultadoElement.innerHTML += `<li>El amigo sorteado es: ${amigoSecreto}</li>`;
    }
}