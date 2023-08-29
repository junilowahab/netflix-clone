let questions = document.querySelectorAll('.questions');
let dropSigns = document.querySelectorAll('.drop-sign');

function answersDropDown(){
    //Creates div that contains answer
    let answers = document.createElement('div');

    //Adds answer div to the question clicked
    questions.forEach(question => {
        question.addEventListener('click', () => {
            question.appendChild(answers);
            answers.classList.add('answers');

            //Triggers change of drop sign
            turnDropSign();
            
            //Display the answers in the answer div from the faqAnswers object
            for(const key in faqAnswers){
                let questionID = question.getAttribute('id');
                if(key === questionID){
                    console.log(`${faqAnswers[key]}`);
                    answers.innerText = faqAnswers[key];
                }
            }
        })
    })
}

//Changes positioning to indicate that the answer have dropped
function turnDropSign(){
    dropSigns.forEach(dropSign => {
        dropSign.classList.toggle('changed');
    });
};

answersDropDown();

const faqAnswers = {
    'what-is-netflix': `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    'netflix-cost': `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.`,
    'where-to-watch': `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    'how-to-cancel': `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    'what-to-watch': `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    'age-appropriate': `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
}