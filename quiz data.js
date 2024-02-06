const APIKEY = "65ae017a083aceac0b9cf117"
const itQuizData = [
    {
      question: 'What does "HTML" stand for?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language'
    },
    {
      question: 'What is the purpose of CSS?',
      options: ['To format the structure of the web page', 'To define the behavior of web elements', 'To provide interactive features', 'To style the presentation of a web page'],
      correctAnswer: 'To style the presentation of a web page'
    },
    {
      question: 'Which programming language is often used for building dynamic web pages?',
      options: ['Java', 'Python', 'JavaScript', 'C#'],
      correctAnswer: 'JavaScript'
    },
    {
      question: 'What does "URL" stand for?',
      options: ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Retrieval Locator', 'Universal Retrieval Locator'],
      correctAnswer: 'Uniform Resource Locator'
    },
    {
      question: 'What is the purpose of the "git" version control system?',
      options: ['To write code', 'To test websites', 'To manage and track changes in code', 'To create databases'],
      correctAnswer: 'To manage and track changes in code'
    },
    {
      question: 'Which database language is widely used for querying and managing databases?',
      options: ['JavaScript', 'SQL', 'Python', 'Java'],
      correctAnswer: 'SQL'
    },
    {
      question: 'What does "API" stand for?',
      options: ['Automated Programming Interface', 'Application Programming Interface', 'Advanced Programming Interface', 'Automated Process Integration'],
      correctAnswer: 'Application Programming Interface'
    },
    {
      question: 'What is the purpose of the "npm" package manager?',
      options: ['To manage networking protocols', 'To manage node processes', 'To manage JavaScript packages and dependencies', 'To manage network performance'],
      correctAnswer: 'To manage JavaScript packages and dependencies'
    },
    {
      question: 'Which protocol is used for secure data communication over a computer network?',
      options: ['HTTP', 'SMTP', 'FTP', 'HTTPS'],
      correctAnswer: 'HTTPS'
    },
    {
      question: 'What is the purpose of the "AJAX" technology in web development?',
      options: ['To create animations', 'To handle asynchronous data requests', 'To design user interfaces', 'To manage authentication'],
      correctAnswer: 'To handle asynchronous data requests'
    }
  ];

  const businessQuizData = [
    {
      question: 'What does ROI stand for in business?',
      options: ['Return on Investment', 'Risk of Inflation', 'Revenue of Income', 'Rate of Interest'],
      correctAnswer: 'Return on Investment'
    },
    {
      question: 'Who is known as the "Father of Modern Management"?',
      options: ['Peter Drucker', 'Henry Ford', 'Andrew Carnegie', 'Elon Musk'],
      correctAnswer: 'Peter Drucker'
    },
    {
      question: 'What is the primary goal of marketing?',
      options: ['Maximize Profit', 'Maximize Sales', 'Customer Satisfaction', 'Cost Minimization'],
      correctAnswer: 'Customer Satisfaction'
    },
    {
      question: 'What does SWOT analysis assess?',
      options: ['Market Trends', 'Employee Performance', 'Competitive Positioning', 'Financial Statements'],
      correctAnswer: 'Competitive Positioning'
    },
    {
      question: 'In business, what does the term "B2B" stand for?',
      options: ['Back to Basics', 'Business to Business', 'Buy to Bargain', 'Base to Base'],
      correctAnswer: 'Business to Business'
    },
    {
      question: 'What is the purpose of a balance sheet?',
      options: ['Record Daily Transactions', 'Show Profit and Loss', 'Assess Company\'s Financial Position', 'Calculate Employee Salaries'],
      correctAnswer: 'Assess Company\'s Financial Position'
    },
    {
      question: 'Which pricing strategy involves setting a high initial price and then gradually lowering it?',
      options: ['Penetration Pricing', 'Skimming Pricing', 'Discount Pricing', 'Cost-Plus Pricing'],
      correctAnswer: 'Skimming Pricing'
    },
    {
      question: 'What is a mission statement in business?',
      options: ['Financial Forecast', 'Long-term Business Goals', 'Company\'s Core Purpose', 'Employee Handbook'],
      correctAnswer: 'Company\'s Core Purpose'
    },
    {
      question: 'What is the role of a CEO?',
      options: ['Chief Financial Officer', 'Chief Executive Officer', 'Chief Marketing Officer', 'Chief Operations Officer'],
      correctAnswer: 'Chief Executive Officer'
    },
    {
      question: 'What does the term "Diversification" mean in business?',
      options: ['Expanding Product Line', 'Employee Training Programs', 'Budget Planning', 'Customer Service'],
      correctAnswer: 'Expanding Product Line'
    }
  ];
  generalQuizData = [];
  async function fetchQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=20&category=9&type=multiple');
        if (!response.ok) {
            throw new Error(`Something went wrong!!
        Unable to fecth the data`);
        }
        const data = await response.json();
        console.log(data);
        const updatedData = data.results.map(result => {
          const unmixedOption = result.incorrect_answers.concat(result.correct_answer);
          const mixedOption = shuffleGeneralOption(unmixedOption);
          return {
            question: result.question,
            options: mixedOption,
            correctAnswer: result.correct_answer
          }
          
        })
        generalQuizData = updatedData;
        console.log(generalQuizData);
    }
    catch (error) {
        console.log(error);
        ques.innerHTML = `<h5 style='color: red'>
        ${error}</h5>`;
    }
  }

//This function is used to shuffle the option in the generalQuizData to avoid answer always be at the last option
function shuffleGeneralOption(quizOption) {
  for (let i = quizOption.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //This is to find random option to change with option[i]
    [quizOption[i], quizOption[j]] = [quizOption[j], quizOption[i]]; //Switch the two option
  }
  return quizOption;
}

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  let currentQuestionIndex = 0;
  let score = 0;
  var currentQuiz;
  var check;

  function loadQuiz(quizData){
    currentQuiz = quizData;
    const questionOption = document.getElementById("option");
    questionOption.innerHTML = "";
    let currentQuestion = quizData[currentQuestionIndex];
    let currentQuestionText = currentQuestion.question;
    let currentQuestionOption = currentQuestion.options;
    ques.innerHTML = currentQuestionIndex+1 + ". "+ currentQuestionText;
    
    currentQuestionOption.forEach(option => {
      const optiondiv = document.createElement("div");  //created a div so no need for the <br> tag to send each option to a new line
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "answer";
      radioInput.value = option;
      radioInput.id = option;

      const optionLabel = document.createElement("label");
      optionLabel.textContent = option;
      optionLabel.htmlFor = option;

      optionLabel.style.padding = "1em 30px";
      optionLabel.style.width = "100%";
      
      optiondiv.style.font = "500 18px Poppins, sans-serif"
      optiondiv.style.border = "1px solid #CCCCCC";
      optiondiv.style.display = "flex";
      optiondiv.style.paddingLeft = "10px";
      optiondiv.style.borderRadius = "5px";
      optiondiv.style.marginBottom = "10px";
      optiondiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2);"

      optiondiv.addEventListener("mouseover", ()=> {
        optiondiv.style.backgroundColor = "#F2F2F2";
      });
      optiondiv.addEventListener("mouseout", ()=> {
        optiondiv.style.backgroundColor = "transparent";
      });
      

      optiondiv.appendChild(radioInput);
      optiondiv.appendChild(optionLabel);
      questionOption.appendChild(optiondiv)
      // questionOption.appendChild(document.createElement("br"));
    });
  }

  function loadScore(){
    const totalScore = document.getElementById("score");
    if(check){
      currentUser.generalScore = score;
      currentUser.generalquiztry = 1;
      currentUser.point += score * 5;
    }
    else{
      currentUser.score = score;
      currentUser.quiztry = 1;
      currentUser.point += score * 5;
    }
    console.log(currentUser.point)
    totalScore.textContent = `Your score is ${score} out of ${quizData.length}`;
    
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    const updateResponse = fetch(`https://fedassignment2-ba48.restdb.io/rest/student/${currentUser._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
    });
  }

  function nextQues(quizData){
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuiz(quizData);
    } 
    else {
      document.getElementById("option").remove()
      document.getElementById("ques").remove()
      document.getElementById("btn").remove()
      loadScore();
    }
  }

  function checkAns() {

    const selectedAns = document.querySelector('input[name="answer"]:checked').value;
    
    if (selectedAns === currentQuiz[currentQuestionIndex].correctAnswer) {
        score++;

    } 
    nextQues(currentQuiz);
  }

document.addEventListener("DOMContentLoaded", async function () {

  await fetchQuestions();

  if (currentUser && currentUser.school === "Business") {
      loadQuiz(businessQuizData);
      currentQuiz = businessQuizData;
  } else if (currentUser && currentUser.school === "Information Technology") {
      loadQuiz(itQuizData);
      currentQuiz = itQuizData;
  }

  document.getElementById("generalQuiz").addEventListener("click", function () {
    if(currentUser.generalquiztry === 1){
      alert("Maximum try per day is reached!");
    }else{
      loadQuiz(generalQuizData);
      currentQuiz = generalQuizData;
      check = true;
    }
      
  });
});