// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const nombre = document.getElementById("amigo").value;
    if (nombre !== ""){
        amigos.push(nombre);
        document.getElementById("amigo").value = '';
    }
    else {
        alert("Por favor, inserte un nombre.");
    }

    actualizarLista();
}

function actualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Actualiza la lista de amigos mostrandola en la pantalla
    for (let amigo of amigos){
        const nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = amigo;
        lista.appendChild(nuevoLi);
    }    
}

function sortearAmigo(){
    if (amigos.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //Accede al nombre de un amigo de manera aleatoria usando el índice
        const nombreAleatorio = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = nombreAleatorio;
    }
    else{
        alert("No hay amigos para sortear.");
    }
    
}