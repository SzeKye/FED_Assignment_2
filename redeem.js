document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
    const APIKEY = "65c2573e71a488dc268b0930"
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let shirtPointElement = document.getElementById("shirt-point");
    let shirtPointText = shirtPointElement.textContent.replace(" XP", "");
    let shirtPoint = parseInt(shirtPointText);
    document.getElementById("product-redeem").addEventListener("click",async function() {
        if (currentUser.point >= shirtPoint) {
            currentUser.point -= 3500;
            localStorage.setItem('currentUser',JSON.stringify(currentUser));
            const updateResponse = await fetch(`https://fedtest-b042.restdb.io/rest/student/${currentUser._id}`, {
            method: 'PUT',
            headers: {  
                'Content-Type': 'application/json',
                'x-apikey': APIKEY // Your API key
            },
            body: JSON.stringify(currentUser)
            });
            document.getElementById("total-points").innerHTML = currentUser.point;
            alert("Redeem successfully! Please collect your shirt at the Convention Centre.");
        } else {
            alert("Not enough points!");
        }
    });
});