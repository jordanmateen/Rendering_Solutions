
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 

    var circlesHTML = circles.map( (circle) =>{
        return (
            `
            <div class = "mt-5" style = " background-color : ${circle.color}; border-radius : ${circle.radius}px; width : ${circle.radius}px; height : ${circle.radius}px;">
            </div>
            `
        )
    })
    return `
        <div class="d-flex flex-column align-items-center text-center mt-5">
            ${circlesHTML.join('')}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}