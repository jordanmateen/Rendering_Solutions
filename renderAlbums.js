
function renderBands(bands){
    var bandsHTML = bands.map( (currentBand) =>{
        return renderBand(currentBand)
    })
    return `
        <div>
            ${bandsHTML.join('')}
        </div>
    `
}

function renderBand(band){
    var albumsHTML = band.albums.map( (currentAlbum)=>{
        return renderAlbum(currentAlbum)
    })
    return (
        `<div>
            ${albumsHTML.join('')}
         </div>`
    )
}

function renderAlbum(album){
    var songsHTML = album.songs.map( (curentSong) =>{
        return renderSong(curentSong)
    })
    return (
        `<div class = "album">
            <img  class = "mb-1" width = "50" src = ${album.albumCover}/>
            <h3 class = "d-inline-block">${album.title}</h3>
            ${songsHTML.join('')}
         </div>
         `
    )
}

function renderSong(song){
    return (
        `<div class = "song d-flex justify-content-between border-top border-bottom py-3">
            <b>${song.title}</b>
            <span>${song.length}</span>
         </div>`
    )
}


function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderBands(albumsAbstraction);

}

