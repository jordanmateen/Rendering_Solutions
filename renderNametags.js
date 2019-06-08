
function renderNametags(nametags) {

    var nameTagsHTML = nametags.map( (name)=>{
        return(
            `
            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header">Write Your name below </div>
                <div class="card-body">
                    <p class="card-text">Hi my name is :</p>
                    <h5 class="card-title">${name}</h5>
                </div>
            </div>
            `
        )
    })
    return `
        <div class="d-flex flex-column align-items-center text-center mt-5">
            <code>${nameTagsHTML.join('')}</code>
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}