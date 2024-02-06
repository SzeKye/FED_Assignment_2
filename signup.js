document.addEventListener("DOMContentLoaded",function(){
    const APIKEY = "65c2573e71a488dc268b0930"

    document.getElementById("sign-up-submit").addEventListener("click",async function(e){
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


        async function checkExistEmail(studentEmail){
            const response = await fetch(`https://fedtest-b042.restdb.io/rest/student?q={"studentEmail":"${studentEmail}"}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
                if(data.length > 0){
                    alert("There is existing email!");
                }else{
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

                fetch("https://fedtest-b042.restdb.io/rest/student",settings)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        document.getElementById("sign-up-submit").disabled = false;

                    })
                    alert("Sign-up successfully!");
                    window.location.href = "home.html";
                }
                
            }else{
                console.log("failed to fetch data");
            } 
        }
        
        await checkExistEmail(studentEmail);
        
        
        });
    });