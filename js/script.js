const express = require("express");
const app = express();
const PORT = 3000;
/*fetch("http://www.omdbapi.com/?apikey=[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]&")
    .then(res => res.json())
    .then(datos => {
        let lista = document.getElementById("lista");
        let li;
        datos.forEach(dato => {
            if (dato.compra && dato.venta) {
                li = document.createElement("li");
                li.innerText = `${dato.nombre}: ${dato.compra} - ${dato.venta}`;
                lista.appendChild(li);*/

Peliculas = []; 
Series = [];
Episodios = [];
function Buscar(){

}


/*
Pelis/series:

Nombre
descripcion
linkimagen
---------------------
Episodios:

Nombre
descripcion
Serie
linkimagen
*/
