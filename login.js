var currentUser;

document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65c3602a4355fb3995c1b485"
    
    // This function will work when user click login button
    document.getElementById("login-submit").addEventListener("click",async function (e){
        e.preventDefault();
        let studentEmail = document.getElementById("student-email").value;
        let studentPassword = document.getElementById("student-pswd").value;
        try {
            
            let settings = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache"
                }


            };
            // Fetch user record from restdb based on email
            const response = await fetch(`https://fedassignment2-0612.restdb.io/rest/student?q={"studentEmail":"${studentEmail}"}`,settings)
            const userData = await response.json();
            
            // Check if userData.length is more than 0, if yes, there is the user and check if password is correct
            if (userData.length > 0 && userData[0].password === studentPassword) {
                alert("Login successful!");
                
                // Set the current user
                currentUser = userData[0]; // Set currentUser to userData[0] 
                localStorage.setItem('currentUser', JSON.stringify(currentUser)); //Store the currentUser in the localstorage
                window.location.href = "home.html"; //direct back to home.html after login
  
            } else { //If userData.length is 0 or password not correct
                alert("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Error authenticating user:", error);
            alert("An error occurred. " + error);
        }
    });
});
