document.addEventListener("DOMContentLoaded",function(e){
    e.preventDefault();
    const APIKEY = "65c2573e71a488dc268b0930"
    getStudent();

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
        fetch("https://fedtest-b042.restdb.io/rest/student", settings)
          .then(response => response.json())
          .then(response => {
            const businessFilteredStudent = response.filter(response => response.school === "Business");
            const itFilteredStudent = response.filter(response => response.school === "Information Technology")
            const generalStudent = response;
            let content = "";
            var count = 0;
            function updateLeaderboard(studentList){
                if(studentList === generalStudent){
                  studentList.sort((a,b) => b.generalScore - a.generalScore);
                  for (var i = 0; i < studentList.length && i < limit; i++) {
                    if(studentList[i].generalScore !== 0){
                      content = `${content}<tr id='${studentList[i]._id}'><td>${studentList[i].name}</td>
                      <td>${studentList[i].studentEmail}</td>
                      <td>${studentList[i].generalScore}</td>`
                      count++;
                    }
                  }
                }else if(studentList === itFilteredStudent || studentList === businessFilteredStudent){
                  studentList.sort((a,b) => b.score - a.score);
                  for (var i = 0; i < studentList.length && i < limit; i++) {
                    if(studentList[i].score !== 0){
                      content = `${content}<tr id='${studentList[i]._id}'><td>${studentList[i].name}</td>
                      <td>${studentList[i].studentEmail}</td>
                      <td>${studentList[i].score}</td>`
                      count++;
                    }
                  }
                }

                //[STEP 9]: Update our HTML content
                // Let's dump the content into our table body
                document.getElementById("contact-list").getElementsByTagName("tbody")[0].innerHTML = content;
        
                document.getElementById("total-contacts").innerHTML = count;
            }
            console.log(window.location.pathname);
            if(window.location.pathname.endsWith("/ICT.html")){
                updateLeaderboard(itFilteredStudent);
            }else if(window.location.pathname.endsWith("/BA.html")){
                updateLeaderboard(businessFilteredStudent);
            }else if(window.location.pathname.endsWith("/Home.html")){
                console.log("haha");
                updateLeaderboard(generalStudent);
            }
          });
      }
    
})