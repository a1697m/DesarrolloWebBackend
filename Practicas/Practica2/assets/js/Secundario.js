document.addEventListener("DOMContentLoaded", function(event) {

    var labeltipo = document.querySelector('.labeltipo');
    var labeldiasDePromocion = document.querySelector('.labeldiasDePromocion');
    var labeldescripcion = document.querySelector('labeldescripcion');
    var labelImg = document.querySelector('.labelImg');
    var songsContainer = document.querySelector('.songList');

    async function getinData(){
        const request = await fetch('http://127.0.0.1:5500/Practicas/Practica2/assets/json/CodigoPr.json')
        var laptop = await request.json();
        return laptop;
    }
    async function printComp (){
        var laptop = await getinData();
        labeltipo.innerHTML = laptop.tipo;
        labeldiasDePromocion.innerHTML = laptop.diasDePromocion;
        labeldescripcion.innerHTML = laptop.descripcion;
        labelImg.setAttribute('src', laptop.Imagen);
        var row = '';
        laptop.Equipos.forEach(Equipo => {
            row +=`<tr> 
                <td>${Equipo.numero} </td>
                <td>${Equipo.pantalla}</td>
                <td>${Equipo.procesador}</td>  
                <td>${Equipo.marca}</td>  
                <td>${Equipo.rentroIluminado}</td>          
            </tr>`;
        });
        songsContainer.innerHTML = row;
    }
    printComp();
    
});