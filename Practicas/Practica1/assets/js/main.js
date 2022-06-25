document.addEventListener("DOMContentLoaded", function(event) {

    var labelArtist = document.querySelector('.labelArtist');
    var labelAlbum = document.querySelector('.labelAlbum');
    var labelDesc = document.querySelector ('.labelDesc');
    var labelImg = document.querySelector('.labelImg');
    var songsContainer = document.querySelector('.songList');

    async function getAlbumData(){
        const request = await fetch('http://localhost:5500/Practicas/Practica1/assets/json/data.json');
        var album = await request.json();
        return album;
    }
    async function printAlbum(){
        var album = await getAlbumData();
        labelArtist.innerHTML = album.artista;
        labelAlbum.innerHTML = album.album;
        labelDesc.innerHTML = album.descripcion;
        labelImg.setAttribute('src', album.imagen);
        var row = '';
        album.canciones.forEach(cancion => {
            row +=`<tr> 
                <td>${cancion.numero} </td>
                <td>${cancion.titulo}</td>
                <td>${cancion.duracion}</td>          
            </tr>`;
        });
        songsContainer.innerHTML = row;
    }
    printAlbum();
});