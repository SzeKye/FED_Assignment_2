
var currentUser = JSON.parse(localStorage.getItem('currentUser')); //get the currentUser from localStorage

//This function will be called if user click the start quiz button
document.getElementById("business-school").addEventListener("click",async function(e){
    e.preventDefault();

    // Check if user school is Business or undefined and user quiztry is less than 0 or undefined, we assume that student might not have school when they create their account
    if((currentUser.school === "Business" || currentUser.school === undefined) && (currentUser.quiztry < 1 || currentUser.quiztry === undefined)){
        
        currentUser.school = "Business"; //Set the user school to Business in case their school is undefined
        localStorage.setItem('currentUser', JSON.stringify(currentUser)) //Update the localstorage
        const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student//${currentUser._id}`, {
        method: 'PUT', //Update the currentUser information to restdb
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': APIKEY // Your API key
        },
        body: JSON.stringify(currentUser)
        });
        if (updateResponse.ok) {
            window.location.href = "quiz.html"; //direct them to quiz page to start the school quiz
        } 
        
    }else if(currentUser.quiztry === 1){ //Check if user quiz try is 1, if yes, show the alert
        alert("You had reached maximum of try per day!");
    }else{ //Check if user is in IT school
        alert("You are not in Business school!");
    }
    
});