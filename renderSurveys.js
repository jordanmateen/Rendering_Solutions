function renderForms(forms){
    var formsHTML = forms.map((currentForm)=>{
        return renderForm(currentForm)
    })
    return`
        <div>
            ${formsHTML.join('')}
        </div>
    `
}

function renderForm(form){
    var formHTML = form.fields.map( (currentField)=>{
        return renderField(currentField)
    })
    return`
        <div class = "mt-5 p-3" style = "border-style : solid; border-width : 1px;">
            <h1>${form.title}</h1>
            <hr/>
            ${formHTML.join('')}
            <button type="button" class="btn btn-success">${form.submitButtonText}</button>
        </div>`
}

function renderField(field){
    var optionHTML =[]
    if(field.option){
        optionHTML = field.option.map((option)=>{
            return `<input type = "${field.type}"/> ${option}<br>`
            
        })
    }else{
        return(
            `<p>${field.label}</p>
            <input type = "${field.type}"/><br>`
        )
    }

    return(
        `<div>
            <p>${field.label}</p>
            ${optionHTML.join('')}
        </div>`
    )
    
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    option: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    option: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    option: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text",
                    
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderForms(surveysAbstraction);

}
