document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
    const APIKEY = "65c2573e71a488dc268b0930"
    var currentUser = JSON.parse(localStorage.getItem('currentUser')); //Get the currentUser from localstorage
    let shirtPointElement = document.getElementById("shirt-point"); //Get the shirtpoint element
    let shirtPointText = shirtPointElement.textContent.replace(" XP", ""); //replace the " XP" to "" to only get the number
    let shirtPoint = parseInt(shirtPointText); //Let it be the number

    //This function will be called if user click redeem
    document.getElementById("product-redeem").addEventListener("click",async function() {
        /* The below part check if currentUser point is enough to buy the shirt */
        if (currentUser.point >= shirtPoint) {
            currentUser.point -= 3500; //Deduct currentUser point by 3500 which is the shirt point
            localStorage.setItem('currentUser',JSON.stringify(currentUser)); //Update the localstorage

            const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${currentUser._id}`, {
            method: 'PUT', //Update the currentUser point at the restdb
            headers: {  
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            body: JSON.stringify(currentUser)
            });
            document.getElementById("total-points").innerHTML = currentUser.point; //Set the total-points shown in the page to the updated point
            alert("Redeem successfully! Please collect your shirt at the Convention Centre.");
            
        } else {
            alert("Not enough points!");
        }
        document.getElementById("exit-btn").click(); //Click the exit btn after everything is done
    });
});