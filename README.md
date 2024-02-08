# FED_Assignment_2
## Our theme: School
### Idea: Educational website that motivates students to complete their assignments

### Idea description
With the idea of motivating more students to attempt 
and complete their assignments here in Ngee Ann 
Polytechnic, our website adds fun elements such as 
experience points, leaderboard rankings and rewards to the 
classroom. With these features we hope to that students 
will have more takeaways at the end of each week in a way 
that is both fun and interesting. 

A version of our school map will be shown on the website's 
home page, when the user hovers to a particular block, the 
name of the school will be shown(IT, Business, etc).
When hovering to the particular school, specific quiz will 
be shown and top 10 highest will appear on the leaderboard 
which will be clear every month.
Top 10 highest will get points based on their ranking, all 
other will get participation points(lesser) and the point 
can be used to redeem our NP T-Shirt which cost 3500 points.

The quiz score, try and game score, try will be resetted everyday at 00:00, this will only work when 
the home.html are running and when the time is 00:00, and the reset time will be few minutes as database contains
quite alot of data. User will be directed to login page to login again after reset is done to ensure data is correct 
when they are using the website. User get one try per day for school quiz, general quiz and 3 try for game. One score for quiz and game will get 5 point.

For the game, we make a mini snake game, each food they eat will give them 1 score,
for every score they have, they will get 5 points and score and try will be resetted everyday at 00:00
The game board size is 35x35 grid

On homepage, ICT page and BA page, there will be a leaderboard showing the user the top 10
student for the respective quiz. The student on the leaderboard will get a point of
200 - (i * 20) where i is their ranking.

There might be an issue if we used the fetch to access the data too many times per day. If it shows an error about failed to fetch,
replace the link and API to use another database, some data might be different but they are similar.

The API we used is restdb for storing date, opendb for trivia quiz and weather api from gov.sg for showing current weather.

link: https://fedtest-b042.restdb.io/rest/student
API: 65c2573e71a488dc268b0930

link: https://fedassignment2-0612.restdb.io/rest/student
API: 65c3602a4355fb3995c1b485

## Credits
- Storyset. (2020, October 29). Company. https://storyset.com/people    
- Goodeisgn. (n.d.). LottieFiles. https://lottiefiles.com/animations/5-star-ratings-motion-AJtyNF0YFk
- LottieFiles: Download Free lightweight animations for website & apps. (n.d.). LottieFiles. https://lottiefiles.com/animations/weather-icon-SN8KY29BK4
- LottieFiles: Download Free lightweight animations for website & apps. (n.d.). LottieFiles. https://lottiefiles.com/animations/red-falling-confetti-sEvMQWNBbD
- LottieFiles. (n.d.). LottieFiles: Download Free lightweight animations for website & apps. https://lottiefiles.com/
- Homepage - Ngee Ann Polytechnic. (n.d.). https://nplms.polite.edu.sg/d2l/home
- Ngee Ann Polytechnic (NP). (n.d.). Ngee Ann Polytechnic (NP). https://www.np.edu.sg/
