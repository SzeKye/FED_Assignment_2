const APIKEY = "65c2573e71a488dc268b0930"
var currentUser = JSON.parse(localStorage.getItem('currentUser')); //Get the currentUser from the localstorage if there is


/* This part show the user name,point on the page */
if (currentUser) {
    // Update student name element
    document.getElementById("name-of-student1").innerHTML = currentUser.name;
    
    document.getElementById("total-points").innerHTML = currentUser.point;
    var name2 = document.getElementById("name-of-student2");
    if(name2){
        document.getElementById("name-of-student2").innerHTML = currentUser.name;
    }
}

/* Remove the currentUser when user log out */
document.getElementById("log-out").addEventListener("click",function(){
    localStorage.removeItem('currentUser');
})

/* If currentUser is not setted, direct them to login page */
if(!currentUser){
    alert("Please log in first!");
    window.location.href = "log-in.html";
}

/* fetch the weather from weather api and show on home page */
fetch(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`)
    .then(response => response.json())
    .then(data => {
        const forecasts = data.items[0].forecasts;
        const clementiForecast = forecasts.find(forecast => forecast.area === 'Clementi');
        document.getElementById("two-hour-forecast").innerHTML = clementiForecast.forecast;
    })

/* This function reset the score,try and update point every day at 00:00 */
async function resetScoreTryUpdatePoint(){

    const response = await fetch(`https://fedtest-b042.restdb.io/rest/student/`, {
        method: 'GET', //Get all the student from restdb
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        });

        
    const student = await response.json();
    const updateLeaderboardPoint = async (leaderboardStudents) => {
        /* The below part filter them based on their school */
        const filteredStudent = student.filter(student => student.school === leaderboardStudents); 
        const generalStudent = student; //This is for all the student, for general quiz and the game
        const sortedGeneralStudent = generalStudent.sort((a,b) => b.generalScore - a.generalScore);

        const sortedStudent = filteredStudent.sort((a,b) => b.score - a.score); //sort the student based on their score for the quiz

        /* Update the student point if their score is not 0, 1st get 200 point, 2nd get 180 point and so on */
        for(let i = 0; i < Math.min(sortedStudent.length, 10); i++){
            if(sortedStudent[i].score !== 0){
                sortedStudent[i].point += (200 - (i * 20));
            }   
        }
        for(let i = 0; i < Math.min(sortedGeneralStudent.length, 10); i++){
            if(sortedGeneralStudent[i].generalScore !== 0){
                sortedGeneralStudent[i].point += (200 - (i * 20));
            }   
        }


        /* The two for loop below is to update the student point to the restdb */
        for(const student of sortedStudent){
            const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${student._id}`, {
            method: 'PUT', //Update the sortedStudent point(for school quiz)
            headers: {  
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            body: JSON.stringify(student)
            });
        }

        for(const student of sortedGeneralStudentt){
            const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${student._id}`, {
            method: 'PUT', //Update the generalStudent point(for general quiz)
            headers: {  
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            body: JSON.stringify(student)
            });
        }
    };
    
    await updateLeaderboardPoint("Information Technology"); //Call the functio and set parameter to the school
    await updateLeaderboardPoint("Business"); //Call the functio and set parameter to the school
    
    /* The below part set all the student's score,quiztry and general quiz score, general quiz try to 0 */
    const updatedStudent = student.map(student => {
        student.score = 0;
        student.quiztry = 0;
        student.generalScore = 0;
        student.generalquiztry = 0;
        student.gameScore = 0;
        student.gameTry = 0;
        return student;
    })

    /* The below part is to update the student data in restdb based on updatedStudent */
    for(const student of updatedStudent){
        const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${student._id}`, {
        method: 'PUT',
        headers: {  
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(student)
        });
    } 
    
    localStorage.removeItem('currentUser'); //Auto log out the user after everything are resetted.
    currentUser = null; //set the currentUser to null 
    window.location.href = "log-in.html"; //Ask user to login after everyday reset to ensure data is all correct
}

/* The checkDate function is to get the current time and check if it is 00:00, if yes, call the resetScoreTryUpdatePoint function
   note: The reset function will only work if the current time is 00:00 and the html is running, it can't auto run without running the html */
async function checkDate(){
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMin = currentDate.getMinutes();
    if(currentHour === 0 && currentMin === 0){
        await resetScoreTryUpdatePoint();
    }
}

checkDate(); //call checkdate function

document.getElementById("start-game").addEventListener("click",function(e){
    e.preventDefault();
    if(currentUser.gameTry < 3){
        window.location.href = "game.html";
    }else{
        alert("You had reached maximum 3 try per day!");
    }
})

/* The below part is for the generalQuiz at the home page */
document.getElementById("generalQuiz").addEventListener("click",function(e){
    e.preventDefault();
    /* Check if they reach the maximum try per day */
    if(currentUser.generalquiztry === 0 || currentUser.generalquiztry === undefined){ 
        localStorage.setItem("generalCheck",true) //set item to localstorage for quiz page
        window.location.href = "quiz.html"; //direct them to quiz page
    }else{
        alert("You have reached maximun try per day!");
    }
    
})

