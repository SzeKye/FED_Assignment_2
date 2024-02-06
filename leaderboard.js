document.addEventListener("DOMContentLoaded",function(e){
    e.preventDefault();
    const APIKEY = "65ae017a083aceac0b9cf117"
    function getStudent(limit = 10, all = true) {

        //[STEP 7]: Create our AJAX settings
        let settings = {
          method: "GET", //[cher] we will use GET to retrieve info
          headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
          },
        }
    
        //[STEP 8]: Make our AJAX calls
        // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
        // RESTDb/NoSql always adds in a unique id for each data; we tap on it to have our data and place it into our links 
        fetch("https://fedassignment2-ba48.restdb.io/rest/student", settings)
          .then(response => response.json())
          .then(response => {
            const businessFilteredStudent = response.filter(response => response.school === "Business");
            const itFilteredStudent = response.filter(response => response.school === "Information Technology")
            function updateLeaderboard(studentList){
                studentList.sort((a,b) => b.score - a.score);
                let content = "";
        
                for (var i = 0; i < studentList.length && i < limit; i++) {
                
                content = `${content}<tr id='${studentList[i]._id}'><td>${studentList[i].name}</td>
                <td>${studentList[i].studentEmail}</td>
                <td>${studentList[i].score}</td>`
                    
                }
                
                //[STEP 9]: Update our HTML content
                // Let's dump the content into our table body
                document.getElementById("contact-list").getElementsByTagName("tbody")[0].innerHTML = content;
        
                document.getElementById("total-contacts").innerHTML = studentList.length;
            }
            if(window.location.pathname.endsWith("/ICT.html")){
                updateLeaderboard(itFilteredStudent);
            }else if(window.location.pathname.endsWith("/B%26A.html")){
                updateLeaderboard(businessFilteredStudent);
            }
          });
      }
    getStudent();
})