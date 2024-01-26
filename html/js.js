document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65ae017a083aceac0b9cf117"
    



    document.getElementById("login-submit").addEventListener("click",function(e){
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
                document.getElementById("login-submit").disabled = true;
                document.getElementById("log-in-form").reset();
            }
        }

        fetch("https://fedassignment2-ba48.restdb.io/rest/student",settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("haha");
                document.getElementById("login-submit").disabled = false;
                
                })
            })
    
    
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