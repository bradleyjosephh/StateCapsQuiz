// Questions and answer objects/arrays
const totalArray = [
  {
    //1
    question: "What is state capital of Arkansas?",
    choice1: "Hartford",
    choice2: "Springfield",
    choice3: "Topeka",
    choice4: "Little Rock",
    answer: 4,
    id: 1,
  },
  {
    //2
    question: "What is the capital of Hawaii",
    choice1: "Honolulu",
    choice2: "Bismarck",
    choice3: "Pierre",
    choice4: "Helena",
    answer: 1,
    id: 2,
  },
  {
    //3
    question: "_____ is the capital of Nevada",
    choice1: "Carson City",
    choice2: "Salem",
    choice3: "Columbus",
    choice4: "Concord",
    answer: 1,
    id: 3,
  },
  {
    //4
    question: "What is the capital city in New York",
    choice1: "Harrisburg",
    choice2: "Richmond",
    choice3: "Sante Fe",
    choice4: "Albany",
    answer: 4,
    id: 4,
  },
  {
    //5
    question: "West virginia has the capital city of?",
    choice1: "Salt Lake City",
    choice2: "Charleston",
    choice3: "Albany",
    choice4: "Trenton",
    answer: 2,
    id: 5,
  },
  {
    //6
    question: "What is the capital of Texas?",
    choice1: "Providence",
    choice2: "Salt Lake City",
    choice3: "Austin",
    choice4: "Olympia",
    answer: 3,
    id: 6,
  },
  {
    //7
    question: "Delaware has a state capital of?",
    choice1: "Boise",
    choice2: "Dover",
    choice3: "Boston",
    choice4: "Augusta",
    answer: 2,
    id: 7,
  },
  {
    //8
    question: "_____ is the capital of the state of Tennessee",
    choice1: "Montegomery",
    choice2: "Jackson",
    choice3: "Madison",
    choice4: "Nashville",
    answer: 4,
    id: 8,
  },
  {
    //9
    question: "What is the capital in the state of Florida?",
    choice1: "Annapolis",
    choice2: "Tallahassee",
    choice3: "Jefferson Ciy",
    choice4: "Raleigh",
    answer: 2,
    id: 9,
  },
  {
    //10
    question: "Wyoming has _____  as a state capital",
    choice1: "Charleston",
    choice2: "Concord",
    choice3: "Cheyenne",
    choice4: "Carson City",
    answer: 3,
    id: 10,
  },
  {
    //11
    question: "What is the capital of Oregon?",
    choice1: "Salem",
    choice2: "Olympia",
    choice3: "Saint Paul",
    choice4: "Harrisburg",
    answer: 1,
    id: 11,
  },
  {
    //12
    question: "The capital of Vermont is?",
    choice1: "Montipelier",
    choice2: "Lincoln",
    choice3: "Des Moines",
    choice4: "Pierre",
    answer: 1,
    id: 12,
  },
  {
    //13
    question: "Ohio has the state capital of what city?",
    choice1: "Atlanta",
    choice2: "Columbus",
    choice3: "Columbia",
    choice4: "Raleigh",
    answer: 2,
    id: 13,
  },
  {
    //14
    question:
      "Alaska also known as The Last Frontier has what city as its capital?",
    choice1: "Boise",
    choice2: "Juneau",
    choice3: "Bismarck",
    choice4: "Helena",
    answer: 2,
    id: 14,
  },
  {
    //15
    question: "What is the capital city of the state of Washington?",
    choice1: "Little Rock",
    choice2: "Denver",
    choice3: "Frankfort",
    choice4: "Olympia",
    answer: 4,
    id: 15,
  },
  {
    //16
    question: "Michigan has a state capital of?",
    choice1: "Saint Paul",
    choice2: "Boston",
    choice3: "Lansing",
    choice4: "Baton Rouge",
    answer: 3,
    id: 16,
  },
  {
    //17
    question: "What is the capital in California?",
    choice1: "Sacramento",
    choice2: "Oklahoma City",
    choice3: "Sante Fe",
    choice4: "Atlanta",
    answer: 1,
    id: 17,
  },
  {
    //18
    question: "_____ is the capital of Arizona",
    choice1: "Albany",
    choice2: "Topeka",
    choice3: "Springfield",
    choice4: "Phoneix",
    answer: 4,
    id: 18,
  },
  {
    //19
    question: "Mississippi has the city of _____ as its capital",
    choice1: "Tallahassee",
    choice2: "Salem",
    choice3: "Providence",
    choice4: "Jackson",
    answer: 4,
    id: 19,
  },
  {
    //20
    question: "What is the capital of South Carolina?",
    choice1: "Dover",
    choice2: "Jackson",
    choice3: "Columbia",
    choice4: "Montgomery",
    answer: 3,
    id: 20,
  },
  {
    //21
    question: "Colorado has what city as its capital?",
    choice1: "Denver",
    choice2: "Tallahassee",
    choice3: "Sacramento",
    choice4: "Springfield",
    answer: 1,
    id: 21,
  },
  {
    //22
    question: "What is the capital of Maine?",
    choice1: "Augusta",
    choice2: "Boston",
    choice3: "Austin",
    choice4: "Annapolis",
    answer: 1,
    id: 22,
  },
  {
    //23
    question: "What is the capital of Missouri?",
    choice1: "Jefferson City",
    choice2: "Trenton",
    choice3: "Honolulu",
    choice4: "Juneau",
    answer: 1,
    id: 23,
  },
  {
    //24
    question: "_____ is the capital of Massachusetts",
    choice1: "Atlanta",
    choice2: "Boston",
    choice3: "Harrisburg",
    choice4: "Springfield",
    answer: 2,
    id: 24,
  },
  {
    //25
    question: "What is the capital of Wisconsin?",
    choice1: "Lansing",
    choice2: "Raleigh",
    choice3: "Madison",
    choice4: "Lincoln",
    answer: 3,
    id: 25,
  },
  {
    //26
    question: "What is the capital of the state of Minnesota?",
    choice1: "Salem",
    choice2: "Boise",
    choice3: "Saint Paul",
    choice4: "Santa Fe",
    answer: 3,
    id: 26,
  },
  {
    //27
    question: "What is the capital of Kentucky?",
    choice1: "Dover",
    choice2: "Jackson",
    choice3: "Columbia",
    choice4: "Montgomery",
    answer: 4,
    id: 27,
  },
  {
    //28
    question: "Illinois has _____ as its capital city",
    choice1: "Bismarck",
    choice2: "Providence",
    choice3: "Springfield",
    choice4: "Salt Lake City",
    answer: 3,
    id: 28,
  },
  {
    //29
    question: "What is the capital of New Hampshire?",
    choice1: "Charleston",
    choice2: "Olympia",
    choice3: "Richmond",
    choice4: "Concord",
    answer: 4,
    id: 29,
  },
  {
    //30
    question: "What is the capital city of the state of Montana?",
    choice1: "Little Rock",
    choice2: "Helena",
    choice3: "Baton Rouge",
    choice4: "Jackson",
    answer: 2,
    id: 30,
  }
  
];

let questionsArray = [];
let idArray = [];
for (let index = 0; index <= 9; index++) {
  const randomIndex = Math.floor(Math.random() * totalArray.length);
  const randomQuestion = totalArray[randomIndex];

  if (idArray.includes(randomQuestion.id)) {
    index--;
    continue;
  }
  questionsArray.push(randomQuestion);
  idArray.push(randomQuestion.id);
}

let next = 0;
let score = 0;

document.getElementById("go").addEventListener("click", () => {
  newGame();
});

// populates list including questions and choices
const newGame = () => {
  document.getElementById("go").style.display = "none";
  let stateQuestions = document.createElement("div");
  stateQuestions.innerHTML = `
    <ul class="list-group">
  <li>${questionsArray[next].question}</li>
  <li data-value ="1" class="list-group-item">${questionsArray[next].choice1}</li>
  <li data-value ="2" class="list-group-item">${questionsArray[next].choice2}</li>
  <li data-value ="3" class="list-group-item">${questionsArray[next].choice3}</li>
  <li data-value ="4" class="list-group-item">${questionsArray[next].choice4}</li>
    </ul>
    `;
  document.getElementById("questions").append(stateQuestions);
};

// Feedback for right and wrong answers adds to score
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("list-group-item")) {
    var userChoice = event.target.getAttribute("data-value");
    if (userChoice == questionsArray[next].answer) {
      score += 1;
      document.getElementById("right").innerText = "Correct!";
    } else {
      document.getElementById("right").innerText = "Wrong";
    }
    if (next < questionsArray.length - 1) {
      next++;
      questions.innerHTML = " ";
      newGame();
    } else {
      showResults();
    }
  }
});

// hides the list and gives user the option to save score
function showResults() {
  document.getElementById("go").style.display = "none";
  document.getElementById("right").style.display = "none";
  questions.innerHTML = `
    <h6>Your Score:${score}</h6>
    <button id="saveScore" class="btn btn-success">Save your score!</button>
    
    `;

  document.getElementById("saveScore").addEventListener("click", (event) => {
    event.preventDefault();
    const newScore = {
      value: score,
    };
    axios
      .post("/api/users/scores", newScore, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
