document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65ae017a083aceac0b9cf117"

    document.getElementById("sign-up-submit").addEventListener("click",function(e){
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
        currentUser = jsondata;
        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
            beforeSend: function() {
                document.getElementById("sign-up-submit").disabled = true;
                document.getElementById("sign-up-form").reset();
            }
        }

        fetch("https://fedassignment2-ba48.restdb.io/rest/student",settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("haha");
                document.getElementById("sign-up-submit").disabled = false;

            })
        });
    });