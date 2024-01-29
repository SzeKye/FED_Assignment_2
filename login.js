

document.addEventListener("DOMContentLoaded",function(){
    
    const APIKEY = "65ae017a083aceac0b9cf117"
    

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
            const response = await fetch(`https://fedassignment2-ba48.restdb.io/rest/student?q={"studentEmail":"${studentEmail}"}`,settings)
            const userData = await response.json();
    
            if (userData.length > 0 && userData[0].password === studentPassword) {
                // Authentication successful
                alert("Login successful!");
                
                // Set the current user
                currentUser = userData[0]; // Assuming userData is an array with only one user object
                console.log(currentUser); // Display the current user for testing purposes
                console.log(document.getElementById("total-points"));
                
                point = currentUser.point;
                document.getElementById("total-points").innerHTML = point;
                
                
            } else {
                // Authentication failed
                alert("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Error authenticating user:", error);
            alert("An error occurred. " + error);
        }
    });

});
