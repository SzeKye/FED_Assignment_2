
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
document.getElementById("business-school").addEventListener("click",async function(e){
    e.preventDefault();
    if((currentUser.school === "Business" || currentUser.school === undefined) && (currentUser.quiztry < 1 || currentUser.quiztry === undefined)){
        
        currentUser.school = "Business";
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