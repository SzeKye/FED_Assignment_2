document.addEventListener("DOMContentLoaded",function(e){
    e.preventDefault();
    const APIKEY = "65c3602a4355fb3995c1b485"
    getStudent(); //call the getstudent function

    // This function get the top 10 student based on their score
    function getStudent(limit = 10,generalLimit = 3, all = true) {
        let settings = {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
          },
        }

        fetch("https://fedassignment2-0612.restdb.io/rest/student", settings) //fetch all the student in restdb
          .then(response => response.json())
          .then(response => {

            //filter the student based on their school
            const businessFilteredStudent = response.filter(response => response.school === "Business"); 
            const itFilteredStudent = response.filter(response => response.school === "Information Technology")
            const generalStudent = response; //This is the generalStudent,which is for generalscore
            let content = "";
            var count = 0;

            //This function will update the leaderboard and shown in the page
            function updateLeaderboard(studentList){
                //This ifelse statement check if the studentList is general or the school student list
                if(studentList === generalStudent){
                  studentList.sort((a,b) => b.generalScore - a.generalScore); //sort the student based on their generalscore
                  for (var i = 0; i < studentList.length && i < generalLimit; i++) {
                    if(studentList[i].generalScore !== 0){
                      //The below part add the content to the leaderboard based on the student information
                      content = `${content}<tr id='${studentList[i]._id}'><td>${studentList[i].name}</td>
                      <td>${studentList[i].studentEmail}</td>
                      <td>${studentList[i].generalScore}</td>`
                      count++;
                    }
                  }
                }else if(studentList === itFilteredStudent || studentList === businessFilteredStudent){
                  studentList.sort((a,b) => b.score - a.score); //sort the student based on their school score
                  for (var i = 0; i < studentList.length && i < limit; i++) {
                    if(studentList[i].score !== 0){
                      //The below part add the content to the leaderboard based on the student information
                      content = `${content}<tr id='${studentList[i]._id}'><td>${studentList[i].name}</td>
                      <td>${studentList[i].studentEmail}</td>
                      <td>${studentList[i].score}</td>`
                      count++;
                      document.getElementById("total-contacts").innerHTML = count;
                    }
                  }
                }

                document.getElementById("contact-list").getElementsByTagName("tbody")[0].innerHTML = content;
        
                
            }
            // The below part check if the current page is BA,ICT or Home, then show respective leaderboard
            if(window.location.pathname.endsWith("/ict.html")){
                updateLeaderboard(itFilteredStudent);
            }else if(window.location.pathname.endsWith("/ba.html")){
                updateLeaderboard(businessFilteredStudent);
            }else if(window.location.pathname.endsWith("/home.html")){
                updateLeaderboard(generalStudent);
            }
          });
      }
    
})