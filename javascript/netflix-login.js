let questions = document.querySelectorAll('.questions');
let answers = document.querySelectorAll('.answers');


function answersDropDown(){
    questions.forEach(question => {
        question.addEventListener('click', () => {
            answers.forEach(answer => {
                answer.classList.toggle('drop');
            })
        })
    })
}

answersDropDown();