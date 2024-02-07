const APIKEY = "65c3602a4355fb3995c1b485"

/* The below itQuizData and businessQuizData is the question for the school quiz */
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
    },
    {
      question: 'What does "DOM" stand for in web development?',
      options: ['Document Object Model', 'Dynamic Object Manipulation', 'Data Object Management', 'Document Object Manipulation'],
      correctAnswer: 'Document Object Model'
    },
    {
      question: 'What is the purpose of the "SSH" protocol?',
      options: ['To securely transfer files between computers', 'To access remote servers securely', 'To manage web hosting services', 'To encrypt web traffic'],
      correctAnswer: 'To access remote servers securely'
    },
    {
      question: 'What does "CMS" stand for in web development?',
      options: ['Content Management System', 'Code Management System', 'Centralized Markup Syntax', 'Customer Management Software'],
      correctAnswer: 'Content Management System'
    },
    {
      question: 'Which JavaScript framework is known for its component-based architecture?',
      options: ['Angular', 'React', 'Vue.js', 'Ember'],
      correctAnswer: 'React'
    },
    {
      question: 'What is the purpose of "CORS" in web development?',
      options: ['To enhance website security', 'To manage cross-origin resource sharing', 'To optimize website performance', 'To encrypt web traffic'],
      correctAnswer: 'To manage cross-origin resource sharing'
    },
    {
      question: 'What is the purpose of "SQL injection"?',
      options: ['To improve database performance', 'To enhance data encryption', 'To prevent data corruption', 'To exploit vulnerabilities in web applications'],
      correctAnswer: 'To exploit vulnerabilities in web applications'
    },
    {
      question: 'Which HTTP method is typically used for submitting form data?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correctAnswer: 'POST'
    },
    {
      question: 'What does "SEO" stand for in the context of web development?',
      options: ['Search Engine Optimization', 'Structured Extension Overview', 'Server Endpoint Operations', 'Secure Email Operations'],
      correctAnswer: 'Search Engine Optimization'
    },
    {
      question: 'Which type of storage is commonly used for client-side web storage?',
      options: ['Relational database', 'NoSQL database', 'Session storage', 'Local storage'],
      correctAnswer: 'Local storage'
    },
    {
      question: 'What is the purpose of the "viewport" meta tag in HTML?',
      options: ['To define the page layout', 'To specify the character encoding', 'To control the browser\'s viewport width and scaling', 'To include external CSS files'],
      correctAnswer: 'To control the browser\'s viewport width and scaling'
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
    },
    {
      question: 'What is a break-even point in business?',
      options: ['The point where revenue exceeds expenses', 'The point where revenue equals expenses', 'The point where revenue is zero', 'The point where expenses exceed revenue'],
      correctAnswer: 'The point where revenue equals expenses'
    },
    {
      question: 'What is the purpose of a marketing mix?',
      options: ['To set prices for products', 'To identify target markets', 'To determine advertising budgets', 'To develop a cohesive marketing strategy'],
      correctAnswer: 'To develop a cohesive marketing strategy'
    },
    {
      question: 'What does the term "ROI" stand for in business?',
      options: ['Return on Investment', 'Risk of Inflation', 'Revenue on Interest', 'Rate of Inflation'],
      correctAnswer: 'Return on Investment'
    },
    {
      question: 'What is the main function of human resources (HR) in a company?',
      options: ['To handle payroll', 'To manage employee benefits', 'To recruit and train employees', 'To oversee product development'],
      correctAnswer: 'To recruit and train employees'
    },
    {
      question: 'What is the purpose of a profit and loss (P&L) statement?',
      options: ['To track revenue from sales', 'To assess company profitability', 'To calculate employee salaries', 'To record daily expenses'],
      correctAnswer: 'To assess company profitability'
    },
    {
      question: 'What is the primary goal of supply chain management?',
      options: ['To maximize profits', 'To minimize production costs', 'To improve product quality', 'To optimize the flow of goods and services'],
      correctAnswer: 'To optimize the flow of goods and services'
    },
    {
      question: 'What is the purpose of market segmentation?',
      options: ['To divide customers into groups based on demographics', 'To reduce competition in the market', 'To increase advertising costs', 'To standardize product offerings'],
      correctAnswer: 'To divide customers into groups based on demographics'
    },
    {
      question: 'What is the difference between a partnership and a corporation in business?',
      options: ['Number of owners', 'Legal liability of owners', 'Taxation structure', 'Type of products sold'],
      correctAnswer: 'Legal liability of owners'
    },
    {
      question: 'What is the purpose of a business plan?',
      options: ['To secure funding from investors', 'To outline business objectives and strategies', 'To manage daily operations', 'To evaluate employee performance'],
      correctAnswer: 'To outline business objectives and strategies'
    },
    {
      question: 'What is the role of market research in business?',
      options: ['To develop advertising campaigns', 'To identify customer needs and preferences', 'To negotiate contracts with suppliers', 'To monitor employee performance'],
      correctAnswer: 'To identify customer needs and preferences'
    }
  ];


  generalQuizData = []; //Not set yet, will fetch from opendb api

  async function fetchQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=20&category=9&type=multiple');
        if (!response.ok) {
            throw new Error(`Something went wrong!!
        Unable to fecth the data`);
        }
        const data = await response.json();
        console.log(data);

        /* The below updatedData will add the question's incorrect_answer and correct_answer fetched from opendb together, store them to a new array */
        const updatedData = data.results.map(result => {
          const unmixedOption = result.incorrect_answers.concat(result.correct_answer);
          const decodedOptions = unmixedOption.map(option => decodeHTMLEntities(option)); //Call the decode function to decode some option
        
          const mixedOption = shuffleGeneralOption(decodedOptions); //Shuffle the option as all the correct answer is at the last option
          return {
            question: result.question,
            options: mixedOption,
            correctAnswer: result.correct_answer
          }
        })

        generalQuizData = updatedData; //store the updatedData to generalQuizData
    }
    catch (error) {
        console.log(error);
        ques.innerHTML = `<h5 style='color: red'>
        ${error}</h5>`;
    }
  }

/* This function is to decode special letter like &%# */
function decodeHTMLEntities(text) {
  const textarea = document.createElement('textarea'); //make it to textarea so browser will auto decode it
  textarea.innerHTML = text;
  return textarea.value;
}

//This function is used to shuffle the option in the generalQuizData to avoid answer always be at the last option
function shuffleGeneralOption(quizOption) {
  for (let i = quizOption.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //This is to find random option to change with option[i]
    [quizOption[i], quizOption[j]] = [quizOption[j], quizOption[i]]; //Switch the two option
  }
  return quizOption;
}

  var currentUser = JSON.parse(localStorage.getItem('currentUser')); //Get currentUser from localstorage
  let currentQuestionIndex = 0;
  let score = 0;
  var currentQuiz;
  var check;
  generalCheck = localStorage.getItem("generalCheck"); //Get the localstorage generalCheck value for later part

  /* The below function will load the quiz */
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
      const radioInput = document.createElement("input"); //create a element input
      radioInput.type = "radio"; //Make radioInput type to radio so they can only select 1 option
      radioInput.name = "answer"; //Name them the same so they will be grouped together
      radioInput.value = option;
      radioInput.id = option;

      const optionLabel = document.createElement("label"); //This label element is to show the option text
      optionLabel.textContent = option;
      optionLabel.htmlFor = option;
      
      optionLabel.style.padding = "1em 30px";
      optionLabel.style.width = "100%";
      
      optiondiv.style.font = "500 18px Poppins, sans-serif";
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
      
      /* The below part append the radioinput and optionlabel to the optiondiv */
      optiondiv.appendChild(radioInput);
      optiondiv.appendChild(optionLabel);
      questionOption.appendChild(optiondiv)
      // questionOption.appendChild(document.createElement("br"));
    });
  }

  /* This function is to load the score after they finish the quiz */
  function loadScore(){
    const totalScore = document.getElementById("score");
    /* The below if else statement is to see if the current quiz they are doing is general or school quiz, check === true mean general quiz
       Add the score,quiztry and points based on the quiz they are having */
    if(check === true){
      currentUser.generalScore = score; //set the score to general score
      currentUser.generalquiztry = 1; //Set quiztry to 1, one day can only have 1 try
      currentUser.point += score * 5; //each score get 5 points
    }
    else{
      currentUser.score = score; 
      currentUser.quiztry = 1; //Set quiztry to 1, one day can only have 1 try
      currentUser.point += score * 5; //each score get 5 points
    }

    totalScore.textContent = `Your score is ${score} out of ${currentQuiz.length}`; //Show the score to user

    /* The below function direct user back to home page 5000ms later after they finish the quiz, */
    setTimeout(function(){
      window.location.href = "home.html"; 
    },5000);
    
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser)) //update the localstorage

    /* The below fetch is to get the currentUser data, then update it */
    const updateResponse = fetch(`https://fedassignment2-0612.restdb.io/rest/student/${currentUser._id}`, {
        method: 'PUT', //update the currentUser in restdb
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
    });


  }

  /* The below function is to load the next question */
  function nextQues(quizData){

    /* Check if the question they are having is the last question or not, if yes,load the score */
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

  /* The below function is to check the answer everytime user click next */
  function checkAns() {

    const selectedAns = document.querySelector('input[name="answer"]:checked').value; //Get the answer
    
    //Check if answer is correct
    if (selectedAns === currentQuiz[currentQuestionIndex].correctAnswer) {
        score++;
    } 
    nextQues(currentQuiz); //go to next question
  }

document.addEventListener("DOMContentLoaded", async function () {

  await fetchQuestions(); //call the fetchQuestions function
  //Check if generalCheck is true, if yes, the quiz is generalquiz
  if(generalCheck === "true"){
    document.getElementById("quizTitle").innerHTML = "General Quiz"
    check = true; //set check to true for point adding in loadScore function
    loadQuiz(generalQuizData);
    currentQuiz = generalQuizData; //set the currentQuiz to generalQuiz
  }else{
    //if generalcheck is not true, quiz is school quiz and check the currentuser school to show respective quiz
    if (currentUser && currentUser.school === "Business") {
      document.getElementById("quizTitle").innerHTML = "Business Quiz"
      loadQuiz(businessQuizData);
      currentQuiz = businessQuizData;//set the currentQuiz to it quiz
  } else if (currentUser && currentUser.school === "Information Technology") {
    document.getElementById("quizTitle").innerHTML = "Information Technology Quiz"
      loadQuiz(itQuizData);
      currentQuiz = itQuizData;//set the currentQuiz to business quiz
  }
  }

  /* This part is to let generalCheck to false and set to localstorage when they leave the quiz.html
     so when they come back to quiz.html, the quiz will not be generalquiz again */
  window.addEventListener("beforeunload",function(){
    localStorage.setItem("generalCheck",false)
  })

});