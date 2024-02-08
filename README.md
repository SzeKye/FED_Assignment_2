# FED_Assignment_2
## Our theme: School
### Idea: Educational website that motivates students to complete their assignments

## Allocation of work
Frontend, UI: Loh Sze Kye
    - Handled the CSS of all html files except for game.css
    - Handled all html files except for game.html

Backend, API: Liew Yong Hong 
    - Handled the CSS of game.html and game.html
    - Handled the all APIs, restDB API, weather API and the general quiz API.
    - Handled all backend functions for all HTML files

Completed 8th February 2024
## Idea summary
With the idea of motivating more students to attempt 
and complete their assignments here in Ngee Ann 
Polytechnic, our website adds fun elements such as 
experience points, leaderboard rankings and rewards to the 
classroom. With these features we hope to that students 
will have more takeaways at the end of each week in a way 
that is both fun and interesting. 

## Design Process 
- NP has always been that poly with something extra. Considering that poly is a mix of ITE, PFP, as well as students who scored decently during their O levels amongst others, we decided to make the learning here in Ngee Ann Polytechnic (NP) as fun as possible by utilising features of gamification such as a leaderboard to promote friendly competition between peers and also the element of e commerce because here in NP, we have our local NP shop which sells exclusive NP merchandise which is extremely well received by the students here as observed by the fact that almost everyone sports some kind of NP apparel. Also, the option to include more rewards, such as discount coupons on food items from our canteen vendors and maybe a free snack or drink from the Cheers or even Subway stores right here in NP would be a sure fire way to entice students into using the website. 

- Taking inspiration from other educational websites which use gamification such as Duolingo, KooBits, and AsknLearn, as well as researching more about how educational institutions style their websites we have decided on a website that aligns with NP's corporate colours, styling, mission and vision to the best of our ability in the curation of the website. However, we did ensure that it also considers a student's needs which can be seen by the presence of multiple button animations throughout the website, a simple game and the gamification features mentioned earlier to make the learning fun.

#### Features that we added
1. The weather at NP.
    - Some of us live extremely far away from NP in towns as far as Samudera (located on the Punggol LRT line which goes west), Bedok, Serangoon. If we had maybe have a physical group meeting in NP, I would want to find out the weather conditions first before deciding on whether it is optimal for me to physically go there. As such this is why we included a weather API which provides updates about the weather forecast every 2 hours. The API can be found in the js.js file line number 29.

2. The whistleblowing function. 
    - It cannot be found on politemall and it takes awhile to find it on the offical NP website as such we decided to add a direct link in the footer of our site.

3. The school-related quizzes and the general quiz 
    - The general quiz fetches 20 randomly generated questions from th opendb API, puts them into a list for the loadQuiz function to display onto the webpage while the school quizzes are 20 preset questions (related to what students learn in their respective schools) stored in separate lists. After the user finishes the quiz, their score will be shown, leaderboard and the restDB for the respective leaderboards updated as well. leaderbord.js stores the restDB functions of getting and putting the scores. quiz data.js contains the quiz related functions while js.js contains the functions which direct them to the quiz html and also checks how many times they've attempted the quiz on the day. Each student can only attempt their school quiz and the general quiz once per day and a student registered under a school cannot attempt another school's quiz. Each correct answer is worth 5 points. Points earned from both quizzes contribute to the overall XP, where 1 point is 1 XP. The top 10 on the school leaderboards and the top 3 of the general quiz leaderboard earn extra points based on their ranking at the end of the day. Formula used to derive XP earned, 200 - (i * 20) where i is their ranking. If this was an actual website the questions in the quiz can be swapped out for actual quiz questions found in politemall or lecturers can leverage on this to provide an enhanced classroom experience

    The attempts are resetted daily along with the leaderboards and allocation of extra XP to the students on the leaderboard but only works when the program is running at 0000 hrs and it will take quite a while to reset due to the amount of data in the database. Backgorund resets cannot be done because it is only available in the premium version which we are not able to afford. 

4. Simple game
    - A big thank you to the snake game YouTube tutorial by coding nepal, citation is down below. Purpose of including a game was to make our website more engaging to the students. Each student gets 3 tries per day for the game for each point earned in the game, 5 points are earned. The game board sixe is a 35x35 grid.

5. Interactive school map on home page
    - A version of our school map will be shown on the website's 
    home page, when the user hovers to a particular block, the name of the school will be shown(IT, Business, etc). Upon clicking, it will direct the user to the school's webpage. 

### Account creation 
- Lecturers, you can create a brand new account via the sign up page using any name, email and password but your XP will be set to 0. The login credentials for the test account abc are ab@gmail.com and the password can be found in the login.js file so as to avoid petty crime. The test account is registered as an IT student but a newly registered account will not be registered to any school until you have done a quiz from either the business or ict school.

We are not responsible if the account was used by someone else before you because this is a public repository on GitHub if you would like a customised account for testing do contact either one of us via our school emails. 

## More limitations with the APIs
There might be an issue if we used the fetch to access the data too many times per day. If it shows an error about failed to fetch,
replace the link and API to use another database, some data might be different but they are similar.

The API we used is restdb for storing date, opendb for trivia quiz and weather api from gov.sg for showing current weather.

Weather API link: https://api.data.gov.sg/v1/environment/2-hour-weather-forecast 

Opendb API link: https://opentdb.com/api.php?amount=20&category=9&type=multiple

RestDB links if a fetch error occurs: 
link: https://fedtest-b042.restdb.io/rest/student
API: 65c2573e71a488dc268b0930

link: https://fedassignment2-0612.restdb.io/rest/student
API: 65c3602a4355fb3995c1b485

### GitHub link
https://github.com/SzeKye/FED_Assignment_2.git

# Thank you for reading and taking time off to go through our website and code files

## Credits (APA 7th Edition Citation)
- Storyset. (2020, October 29). Company. https://storyset.com/people    
- Goodeisgn. (n.d.). LottieFiles. https://lottiefiles.com/animations/5-star-ratings-motion-AJtyNF0YFk
- LottieFiles: Download Free lightweight animations for website & apps. (n.d.). LottieFiles. https://lottiefiles.com/animations/weather-icon-SN8KY29BK4
- LottieFiles: Download Free lightweight animations for website & apps. (n.d.). LottieFiles. https://lottiefiles.com/animations/red-falling-confetti-sEvMQWNBbD
- LottieFiles. (n.d.). LottieFiles: Download Free lightweight animations for website & apps. https://lottiefiles.com/
- Homepage - Ngee Ann Polytechnic. (n.d.). https://nplms.polite.edu.sg/d2l/home
- Ngee Ann Polytechnic (NP). (n.d.). Ngee Ann Polytechnic (NP). https://www.np.edu.sg/
- CodingNepal. (2023, February 9). Create a snake game in HTML CSS & JavaScript | JavaScript Game Tutorial [Video]. YouTube. https://www.youtube.com/watch?v=K8Rh5x3c9Pw
- Web Dev Simplified. (2022, August 20). Bootstrap 5 Crash Course [Video]. YouTube. https://www.youtube.com/watch?v=Jyvffr3aCp0
- HTML-CSS: Hover underline animation - w3resource. (2022, August 19). W3resource. https://www.w3resource.com/html-css-exercise/html-css-practical-exercises/html-css-practical-exercise-15.php
- HTML data-* Attribute. (n.d.). https://www.w3schools.com/tags/att_data-.asp
- HTML-CSS: Hover underline animation - w3resource. (2022, August 19). W3resource. https://www.w3resource.com/html-css-exercise/html-css-practical-exercises/html-css-practical-exercise-15.php
- The Ngee Ann Shop. (n.d.). The Ngee Ann Shop, Online Shop | Shopee Singapore. https://shopee.sg/thengeeannshop?categoryId=100011&entryPoint=ShopByPDP&itemId=19891981969
- RYDER. (n.d.). Wattle Guide Tee. https://ryderlabel.com/products/wattle-guide-tee?variant=12403507593316
- Bootstrap Collapse. (n.d.). https://www.w3schools.com/bootstrap/bootstrap_collapse.asp
- M, A. (2023, July 26). Using the “map” Tag on Your HTML Page - Amjad M - Medium. Medium. https://medium.com/@amjad.maksuma/using-map-tag-in-your-html-page-86305e4bfbf8
- HTML Image maps. (n.d.). https://www.w3schools.com/html/html_images_imagemap.asp
- Round corners on image online. (n.d.). PineTools. https://pinetools.com/round-corners-image
- Jana, S. (2022, November 7). How to link to a specific part of a page in HTML? - Scaler topics. Scaler Topics. https://www.scaler.com/topics/how-to-link-to-a-specific-part-of-a-page-html/
- GeeksforGeeks. (2023, December 7). Create a quiz application using JavaScript. https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
- Duolingo. (n.d.). Duolingo - Learn a language for free @duolingo. https://www.duolingo.com/
- GeeksforGeeks. (2021, December 29). How to specify border colors in Bootstrap. https://www.geeksforgeeks.org/how-to-specify-border-colors-in-bootstrap/
- How to create an unordered list without bullets. (n.d.). https://www.w3schools.com/howto/howto_css_list_without_bullets.asp
- SP. (n.d.). https://www.sp.edu.sg/
- Week 08 Fetch API. (n.d.). https://nplms.polite.edu.sg/d2l/le/enhancedSequenceViewer/362632?url=https%3A%2F%2F746e9230-82d6-4d6b-bd68-5aa40aa19cce.sequences.api.brightspace.com%2F362632%2Factivity%2F7029689%3FfilterOnDatesAndDepth%3D1
- Homepage - Interactive Development / Front End Development(1_ID_009807 / 3_FED_013851). (n.d.). https://nplms.polite.edu.sg/d2l/home/362632