axios({
    method: 'get',
    url: 'http://www.omdbapi.com/?apikey=a79a25cd&s=Nombre&y=año&type=Tipo',
  }).then(response => {
    let Nombre = document.getElementById("Nombre");
    let año = document.getElementById("Año");
    let Serie = document.getElementById("Series");
    let Pelicula = document.getElementById("Peliculas");
    let Episodio = document.getElementById("Episodios");
    response.data.forEach(dato => {
      if (dato.compra && dato.venta) {
        li = document.createElement("li");
        li.innerText = `${dato.nombre}: ${dato.compra} - ${dato.venta}`;
        lista.appendChild(li);
      }
    });
  });


function Buscar(){

}

console.log(año)
console.log(Nombre)