# Trivia Web App

It's an online trivia game for friends to play together.

For hackathon "Who wants to be a Hackionaire"

https://whowantstobeahackionaire.devpost.com/

## To run
API server
cd \OpenTriviaQA 
node src\index.js

## Resources

https://github.com/cliffweng/OpenTriviaQA

## Design

backend: NodeJS Express
frontend: ReactJS
web portal: Gatsby

## Rules
### Single Player

- Click on the question to get the next question
- Click on one of the multiple choices and the answer will show up at the bottom.
- Green for correct answer and orange for wrong answer
- Score will be display on top; hard refresh the page to reset.

### Multi-players

#### Sign on page
- Sign on page has a name field and a room#. Enter any display name you want. (no registration needed)
- If you already have a room# that your friends gave you, enter here. Leaving it blank indicates you want to join a random online game room.
- Hit "Enter the room" and you will be brought to the game room page. First one in is the host.
- Game rooms are removed after 10 minutes of inactivity.

#### Game Mode

- Timed
- Team
- Winner takes all. first one answers correctly scores 2, all wrong answers minus 1, timed out.
- Other game modes to be added

#### Game Room page
- On the page, you will see:
    - Game Mode : Timed, Team, etc...
    - Running scores and games won. e.g. "Julian 13(2), Darren 12(3), Gabe 14(0), Cliff 8(2)"
    - Countdown clock / questions left / timeout / category / New game / Return Room
    - Question
    - Choices
    - Answer
- A host can change the category, set the timeout (seconds for each trivia), start or end the game.


#### Hall of Fame page

## API Design

### Create a New Game
/register/:username/:room (e.g. "http://localhost/register/julianw")
- {"session":Dew$nj,"userid":20134}

### Join an Existing Game
/join/:username/ (e.g. "http://localhost/register/julianw/") // leave server to match you against an open game.
- {"session":Dew$nj,"userid":20134}

/join/:username/:session (e.g. "http://localhost/register/julianw/Dew$nj")
- {"session":Dew$nj,"userid":20134}

### Start a Game
/start/:session
- {"status":"Game started. 4 people are in the game", "status_code":0}

### Get Next Question
/get/:userid  (e.g. "http://localhost/get/20134/")
- {"status":"Wait for other players", "question_no":0}
- {"status":"Question 12/20", , "question_no":12, "question":"Three of these animals hibernate. Which one does not?", 
    choices:{"A":"Mouse","B":"Sloth","C":"Frog","D":"Snake"}}
- {"status":"You are the winner!"}

### Current Scores
/scores/:session
- {"julianw":13, "jwusername":12, "DW":10}

### Answer a Question
/answer/:userid/:question_no/:answer (e.g. "http://localhost/answer/20134/12/A")
- {"status":"Correct!", "win":6, "loss":3}

### Get Random Question
/question/
/question/:category

## Installation
### Gatsby and React

#### Install Gatsby
```
npm i -g gatsby-cli
gatsby new web
cd web
npm install react-bootstrap bootstrap
Add following to /src/components/layout.js
    import 'bootstrap/dist/css/bootstrap.min.css';
Add following to /src/pages/index.js
    import {Button} from 'react-bootstrap'
```
Now the React is fully integrated with Gatsby!

Change gabtsy-config.js and /src/pages/index.js to change the landing page!
#### Add React
Try the following in index.js
```
<Button variant="outline-primary" href="http://yahoo.com">Go to Yahoo</Button> <br />
<Link className="btn btn-outline-primary" to="/page-2/">Go to page 2</Link> <br />
```
Launch the website! `gatsby develop`

#### Add Axios

Follow the [React Axios Tutorial](https://www.digitalocean.com/community/tutorials/react-axios-react)

- npm install axios
- Create /react/triviapage.js

## Development

gatsby develop
## Deploy

https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/

- npm install gh-pages --save-dev
- add the following line to gatsby-config.js :
    - pathPrefix: "/trivia",

- add the following line to package.json's 'Scripts' section:
    - "deploy": "gatsby build --prefix-paths && gh-pages -d public"

- npm run deploy
