
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
document.getElementById("it-school").addEventListener("click",async function(e){
    e.preventDefault();
    console.log("clicked");
    if((currentUser.school === "Information Technology" || currentUser.school === undefined) && (currentUser.quiztry < 1 || currentUser.quiztry === undefined)){
        
        currentUser.school = "Information Technology";
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${currentUser._id}`, {
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