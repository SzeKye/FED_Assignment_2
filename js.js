
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

    
    
    document.getElementById("business-school").addEventListener("click",async function(e){
        e.preventDefault();
        currentUser.currentSchool = "Business";
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
        loadQuiz(businessQuizData);
        const updateResponse = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student/${currentUser._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
    });

    } else {
        console.error("Failed to update user's current school.");
    }
    });

    document.getElementById("it-school").addEventListener("click",async function(e){
        e.preventDefault();
        currentUser.currentSchool = "Information Technology";
        const updateResponse = await fetch(`https://your-restdb-url/rest/student/${currentUser._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
    });
    if (updateResponse.ok) {
        console.log("User's current school updated successfully!");
        loadQuiz(itQuizData)
        const updateResponse = await fetch(`https://your-restdb-url/rest/student/${currentUser._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
    });
    } else {
        console.error("Failed to update user's current school.");
    }
    });

    document.getElementById("update-leaderboard1").addEventListener("click", function (e) {
        e.preventDefault();
        getStudentsBySchool("Business");
      });

      document.getElementById("update-leaderboard2").addEventListener("click", function (e) {
        e.preventDefault();
        getStudentsBySchool("IT");
      });
});