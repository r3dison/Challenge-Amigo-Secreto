const miArray = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if(nombre === ''){
        alert('Por favor, inserte un nombre.');
    }else {
        miArray.push(nombre);
        document.getElementById('amigo').value = '';
    }
    mostrarEnLista(miArray, "listaAmigos");
}

function mostrarEnLista(array, listaId) {
    const lista = document.getElementById(listaId);
    lista.innerHTML = '';
    if (!lista) {
        console.error(`No se encontró el elemento con ID: ${listaId}`);
        return;
    }

    for (let i = 0; i < array.length; i++) {
        const item = document.createElement("li");
        item.textContent = array[i];
        lista.appendChild(item);
    }
}

