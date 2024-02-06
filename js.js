
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve current user from localStorage  
    const APIKEY = "65ae017a083aceac0b9cf117"
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    
    if (currentUser) {
        // Update student name element
        document.getElementById("name-of-student1").innerHTML = currentUser.name;
        
        document.getElementById("total-points").innerHTML = currentUser.point;
        var name2 = document.getElementById("name-of-student2");
        if(name2){
            document.getElementById("name-of-student2").innerHTML = currentUser.name;
        }
    }

    fetch(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`)
        .then(response => response.json())
        .then(data => {
            const forecasts = data.items[0].forecasts;
            const clementiForecast = forecasts.find(forecast => forecast.area === 'Clementi');

            console.log(clementiForecast);
        })

        async function resetScoreTryUpdatePoint(){

            const response = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': APIKEY // Your API key
                },
                });
        
                
            const student = await response.json();
            const updateLeaderboardPoint = async (leaderboardStudents) => {
                const filteredStudent = student.filter(student => student.school === leaderboardStudents);
                const sortedStudent = filteredStudent.sort((a,b) => b.score - a.score);
                for(let i = 0; i < Math.min(sortedStudent.length, 10); i++){
                    if(sortedStudent[i].score !== 0){
                        sortedStudent[i].point += (200 - (i * 5));
                    }
                }
                for(const student of sortedStudent){
                    const updateResponse = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student/${student._id}`, {
                    method: 'PUT',
                    headers: {  
                        'Content-Type': 'application/json',
                        'x-apikey': APIKEY // Your API key
                    },
                    body: JSON.stringify(student)
                    });
                }
            };
            
            await updateLeaderboardPoint("Information Technology");
            await updateLeaderboardPoint("Business");
            
            const updatedStudent = student.map(student => {
                student.score = 0;
                student.quiztry = 0;
                student.generalScore = 0;
                student.generalquiztry = 0;
                return student;
            })
        
        
            for(const student of updatedStudent){
                const updateResponse = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student/${student._id}`, {
                method: 'PUT',
                headers: {  
                    'Content-Type': 'application/json',
                    'x-apikey': APIKEY // Your API key
                },
                body: JSON.stringify(student)
                });
            }
            
            
        }
        
        
        async function checkDate(){
            const currentDate = new Date();
            const currentHour = currentDate.getHours();
            const currentMin = currentDate.getMinutes();
            console.log(currentHour,currentMin)
            if(currentHour === 21){
                await resetScoreTryUpdatePoint();
            }
        }
        checkDate();
    
    
    document.getElementById("business-school").addEventListener("click",async function(e){
        e.preventDefault();
        if((currentUser.school === "Business" || currentUser.school === undefined) && (currentUser.quiztry < 1 || currentUser.quiztry === undefined)){
            
            currentUser.school = "Business";
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            const updateResponse = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student/${currentUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            body: JSON.stringify(currentUser)
            });
            if (updateResponse.ok) {
                console.log("User's current school updated successfully!");
                window.location.href = "quiz.html";
            } else {
                console.error("Failed to update user's current school.");
            }
            
        }else if(currentUser.quiztry === 1){
            alert("You had reached maximum of try per month!");
        }else{
            alert("You are not in Business school!");
        }
        
    });

    document.getElementById("it-school").addEventListener("click",async function(e){
        e.preventDefault();
        if((currentUser.school === "Information Technology" || currentUser.school === undefined) && (currentUser.quiztry < 1 || currentUser.quiztry === undefined)){
            
            currentUser.school = "Information Technology";
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
            const updateResponse = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student/${currentUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            body: JSON.stringify(currentUser)
            });
            if (updateResponse.ok) {
                
                window.location.href = "quiz.html";
            } else {
                console.error("Failed to update user's current school.");
            }
        }else if(currentUser.quiztry === 1){
            alert("You had reached maximum of try per month!");
        }else{
            alert("You are not in IT school!");
        }
    });

    document.getElementById("general").addEventListener("click",async function(e){
        e.preventDefault();
        document.dispatchEvent(new Event("generalQuiz"));
        window.location.href = "quiz.html";
    })

    document.getElementById("it-leaderboard").addEventListener("click", async function (e) {
        e.preventDefault();
        const response = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            });
        if(response.ok){
            const data = await response.json();
            const itStudent = data.filter(student => student.school === "Information Technology");
            const sortedScores = itStudent.sort((a,b) => b.score - a.score);
            for (let i = 0; i < 10; i++) {
                const student = sortedScores[i];
                console.log(`${student.name} ${student.score}`);
            }
        }
        else{
            console.log("failed to fetch");
        }
      });

      document.getElementById("business-leaderboard").addEventListener("click", async function (e) {
        e.preventDefault();
        const response = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            });
        if(response.ok){
            const data = await response.json();
            const businessStudent = data.filter(student => student.school === "Business");
            const sortedScores = businessStudent.sort((a,b) => b.score - a.score);
            for (let i = 0; i < 10; i++) {
                const student = sortedScores[i];
                console.log(`${student.name} ${student.score}`);
            }
        }
        else{
            console.log("failed to fetch");
        }
      });

      document.getElementById("general-leaderboard").addEventListener("click", async function (e) {
        e.preventDefault();
        const response = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            });
        if(response.ok){
            const data = await response.json();
            const sortedScores = data.sort((a,b) => b.generalScore - a.generalScore);
            for (let i = 0; i < 10; i++) {
                const student = sortedScores[i];
                console.log(`${student.name} ${student.generalScore}`);
            }
        }
        else{
            console.log("failed to fetch");
        }
      });
      console.log(itLeaderboardStudent);
    });

