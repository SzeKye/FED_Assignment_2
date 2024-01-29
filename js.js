document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65ae017a083aceac0b9cf117"




    document.getElementById("register-submit").addEventListener("click",function(e){
        e.preventDefault();

        let studentName = document.getElementById("student-name").value;
        let studentEmail = document.getElementById("student-email").value;
        let studentPassword = document.getElementById("student-pswd").value;
        let studentPoint = 0;

        let jsondata = {
            "name": studentName,
            "studentEmail": studentEmail,
            "password": studentPassword,
            "point": studentPoint
        };

        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
            beforeSend: function() {
                document.getElementById("register-submit").disabled = true;
                document.getElementById("register-form").reset();
            }
        }

        fetch("https://fedassignment2-ba48.restdb.io/rest/student",settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("haha");
                document.getElementById("register-submit").disabled = false;

            })
        });

    document.getElementById("login-submit").addEventListener("click",async function (e){
        let studentEmail = document.getElementById("student-email").value;
        let studentPassword = document.getElementById("student-pswd").value;
        try {
            // Fetch user record from restdb based on email
            const response = await fetch(`https://your-restdb-url/rest/student?q={"studentEmail":"${studentEmail}"}`);
            const userData = await response.json();
    
            if (userData.length > 0 && userData[0].password === studentPassword) {
                // Authentication successful
                alert("Login successful!");
                
                // Set the current user
                let currentUser = userData[0]; // Assuming userData is an array with only one user object
                console.log(currentUser); // Display the current user for testing purposes
            } else {
                // Authentication failed
                alert("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Error authenticating user:", error);
            alert("An error occurred. Please try again later.");
        }
    });

    function getStudentsBySchool(schooltype){
        let settings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
        }

        fetch("https://fedassignment2-ba48.restdb.io/rest/student", settings)
            .then(response => response.json())
            .then(response => {

                const schoolStudents = response.filter(student => student.school === schooltype);

                schoolStudents.sort((a,b) => b.point - a.point);
                let content = "";
                const limit = 10;

                for(let i = 0; i < limit; i++){
                    content += `
                    <tr id = '${schoolStudents[i]._id}'>
                    <td> ${schoolStudents[i].name} </td>
                    <td> ${schoolStudents[i].point} </td>}`;
                }

                document.getElementById("leaderboard").innerHTML = content;
            })
            .catch((error) => console.error("Error fetching students: ",error));
    }

    document.getElementById("business-school").addEventListener("click",function(e){
        e.preventDefault();
        changeSchool("Business");
    });

    document.getElementById("it-school").addEventListener("click",function(e){
        e.preventDefault();
        changeSchool("IT")
    });

    function changeSchool(newSchool){
        currentSchool = newSchool;
    }

    document.getElementById("update-leaderboard1").addEventListener("click", function (e) {
        e.preventDefault();
        getStudentsBySchool("Business");
      });

      document.getElementById("update-leaderboard2").addEventListener("click", function (e) {
        e.preventDefault();
        getStudentsBySchool("IT");
      });

});
