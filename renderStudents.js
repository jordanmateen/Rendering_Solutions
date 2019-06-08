
function renderStudents(students) {

    var studentsHTML = students.map( (student)=>{
        let color = ''
        let attendance = ''
        
        if(student.isPresent == true){
            color = 'lightgreen'
            attendance = 'Present'
        }else {
            color = 'red'
            attendance = 'Absent'
        }

        return (
            `
            <div class = "mt-3" style = "border-style: solid ;width: 200px; background-color : ${color}">
                <h1>${student.name}</h1>
                <span>${attendance}</span>
            </div>
            `
        )
    })
    return `
        <div class="d-flex flex-column align-items-center text-center mt-5">
            <span style = "font-size: 40px; ">ROLL CALL</span>
            <div>
                ${studentsHTML.join('')}
            </div>
            
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}