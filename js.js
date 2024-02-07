const APIKEY = "65c2573e71a488dc268b0930"
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

    document.getElementById("log-out").addEventListener("click",function(){
        localStorage.removeItem('currentUser');
    })

    if(!currentUser){
        alert("Please log in first!");
        window.location.href = "Log-In.html";
    }
    

    fetch(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`)
        .then(response => response.json())
        .then(data => {
            const forecasts = data.items[0].forecasts;
            const clementiForecast = forecasts.find(forecast => forecast.area === 'Clementi');
            
            console.log(clementiForecast.forecast);
        })

    async function resetScoreTryUpdatePoint(){

        const response = await fetch(`https://fedtest-b042.restdb.io/rest/student`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            });
    
            
        const student = await response.json();
        const updateLeaderboardPoint = async (leaderboardStudents) => {
            const filteredStudent = student.filter(student => student.school === leaderboardStudents);
            const generalStudent = student;
            const sortedGeneralStudent = generalStudent.sort((a,b) => b.generalScore - a.generalScore);
            const sortedStudent = filteredStudent.sort((a,b) => b.score - a.score);
            for(let i = 0; i < Math.min(sortedStudent.length, 10); i++){
                if(sortedStudent[i].score !== 0){
                    sortedStudent[i].point += (200 - (i * 5));
                }   
            }
            for(let i = 0; i < Math.min(sortedGeneralStudent.length, 10); i++){
                if(sortedGeneralStudent[i].generalScore !== 0){
                    sortedGeneralStudent[i].point += (200 - (i * 5));
                }   
            }
            for(const student of sortedStudent){
                const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${student._id}`, {
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
  
    }

    async function checkDate(){
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMin = currentDate.getMinutes();
        if(currentHour === 0 && currentMin === 0){
            await resetScoreTryUpdatePoint();
        }
    }
    checkDate();

    document.getElementById("generalQuiz").addEventListener("click",function(e){
        e.preventDefault();
        if(currentUser.generalquiztry === 0){
            localStorage.setItem("generalCheck",true)
            window.location.href = "quiz.html";
        }else{
            alert("You have reached maximun try per day!");
        }
        
    })

