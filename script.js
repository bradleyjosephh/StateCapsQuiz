// Questions and answer objects/arrays
const questionsArray = [

    { //1
        question: "What is state capital of Arkansas?",
        choice1: 'Hartford',
        choice2: 'Springfield',
        choice3: 'Topeka',
        choice4: 'Little Rock',
        answer: 4
    },
    { //2
        question: "What is the capital of Hawaii",
        choice1: "Honolulu",
        choice2: "Bismarck",
        choice3: "Pierre",
        choice4: "Helena",
        answer: 1
    },
    { //3
        question: "_____ is the capital of Nevada",
        choice1: "Carson City",
        choice2: "Salem",
        choice3: "Columbus",
        choice4: "Concord",
        answer: 1
    },
    { //4
        question: "What is the capital city in New York",
        choice1: "Harrisburg",
        choice2: "Richmond",
        choice3: "Sante Fe",
        choice4: "Albany",
        answer: 4
    },
    { //5
        question: "West virginia has the capital city of?",
        choice1: 'Salt Lake City',
        choice2: 'Charleston',
        choice3: 'Albany',
        choice4: 'Trenton',
        answer: 2
    },
    { //6
        question: 'What is the capital of Texas?',
        choice1: "Providence",
        choice2: "Salt Lake City",
        choice3: "Austin",
        choice4: "Olympia",
        answer: 3
    },
    { //7
        question: "Delaware has a state capital of?",
        choice1: "Boise",
        choice2: "Dover",
        choice3: "Boston",
        choice4: "Augusta",
        answer: 2
    },
    { //8
        question: "_____ is the capital of the state of Tennessee",
        choice1: "Montegomery",
        choice2: "Jackson",
        choice3: "Madison",
        choice4: "Nashville",
        answer: 4
    },
    { //9
        question: "What is the capital in the state of Florida?",
        choice1: "Annapolis",
        choice2: "Tallahassee",
        choice3: "Jefferson Ciy",
        choice4: "Raleigh",
        answer: 2
    },
    { //10
        question: "Wyoming has _____  as a state capital",
        choice1: "Charleston",
        choice2: "Concord",
        choice3: "Cheyenne",
        choice4: "Carson City",
        answer: 3
    },
    { //11
        question: "What is the capital of Oregon?",
        choice1: "Salem",
        choice2: "Olympia",
        choice3: "Saint Paul",
        choice4: "Harrisburg",
        answer: 1
    },
    { //12
        question: "The capital of Vermont is?",
        choice1: "Montipelier",
        choice2: "Lincoln",
        choice3: "Des Moines",
        choice4: "Pierre",
        answer: 1
    },
    { //13
        question: "Ohio has the state capital of what city?",
        choice1: "Atlanta",
        choice2: "Columbus",
        choice3: "Columbia",
        choice4: "Raleigh",
        answer: 2
    },
    { //14
        question: "Alaska also known as The Last Frontier has what city as its capital?",
        choice1: "Boise",
        choice2: "Juneau",
        choice3: "Bismarck",
        choice4: "Helena",
        answer: 2
    },
    { //15
        question: "What is the capital city of the state of Washington?",
        choice1: "Little Rock",
        choice2: "Denver",
        choice3: "Frankfort",
        choice4: "Olympia",
        answer: 4
    },
    { //16
        question: "Michigan has a state capital of?",
        choice1: "Saint Paul",
        choice2: "Boston",
        choice3: "Lansing",
        choice4: "Baton Rouge",
        answer: 3
    },
    { //17
        question: "What is the capital in California",
        choice1: "Sacramento",
        choice2: "Oklahoma City",
        choice3: "Sante Fe",
        choice4: "Atlanta",
        answer: 1
    },
    { //18
        question: "_____ is the capital of Arizona",
        choice1: "Albany",
        choice2: "Topeka",
        choice3: "Springfield",
        choice4: "Phoneix",
        answer: 4
    },
    { //19
        question: "Mississippi has the city of _____ as its capital",
        choice1: "Tallahassee",
        choice2: "Salem",
        choice3: "Providence",
        choice4: "Jackson",
        answer: 4
    },
    { //20
        question: "What is the capital of South Carolina",
        choice1: "Dover",
        choice2: "Jackson",
        choice3: "Columbia",
        choice4: "Montgomery",
        answer: 3
    }
];

let next = 0
let score = 0


document.getElementById('go').addEventListener('click', () => {
    newGame()
}
)

// populates list including questions and choices
const newGame = () => {

    document.getElementById('go').style.display = "none";
    let stateQuestions = document.createElement('div')
    stateQuestions.innerHTML = `
    <ul class="list-group">
  <li>${questionsArray[next].question}</li>
  <li data-value ="1" class="list-group-item">${questionsArray[next].choice1}</li>
  <li data-value ="2" class="list-group-item">${questionsArray[next].choice2}</li>
  <li data-value ="3" class="list-group-item">${questionsArray[next].choice3}</li>
  <li data-value ="4" class="list-group-item">${questionsArray[next].choice4}</li>
    </ul>
    
    
    
    
    `
    document.getElementById('questions').append(stateQuestions)


}

// Feedback for right and wrong answers adds to score and removes time for incorrect answers
document.addEventListener('click', event => {
    if (event.target.classList.contains('list-group-item')) {
        var userChoice = event.target.getAttribute('data-value')
        console.log(userChoice)
        if (userChoice == questionsArray[next].answer) {
            score+= 5
            document.getElementById('right').innerText = "Correct!"
        } else {
            document.getElementById('right').innerText = "Wrong"
        }
        if (next < questionsArray.length - 1) {
            next++
            questions.innerHTML = " "
            newGame()
        } else {

            showResults()
        }

    }
})

// hides the list and prompts user to enter initials to save high score
function showResults() {
    document.getElementById('go').style.display = "none";
    document.getElementById('right').style.display = "none";
    questions.innerHTML = `
    <h6>Your Score:${score}</h6><input id="usernameInitials" placeholder="username"></input>
    <button onclick="saveScore()">Save your score!</button>
    
    `
}

// Local storage saving username and scores
function saveScore(){
    let username = document.querySelector('#usernameInitials').value
    let highscore = JSON.parse(localStorage.getItem("score")) || []
    console.log(username)


    highscore.push({
        username: username,
        score: score
    })
// converting object to string for local storage to be parsed later
    // high score list appended to to the page after recording each score
    localStorage.setItem("score", JSON.stringify(highscore))
    questions.innerHTML = '<a href="highscore.html"><button>Highscore</button></a>'
}
