# Trivia Web App

It's a online trivia game for friends to play together.

For hackathon "Who wants to be a Hackionaire"

https://whowantstobeahackionaire.devpost.com/

## Resources

https://github.com/cliffweng/OpenTriviaQA

## Design

backend: NodeJS Express
frontend: ReactJS
web portal: Gatsby

## Play Rules

- A person can register a new game

## API Design

### Create a New Game
/register/:username (e.g. "http://localhost/register/julianw")
- {"session":Dew$nj,"userid":20134}

### Join an Existing Game
/join/:username/ (e.g. "http://localhost/register/julianw/") // leave server to match you against an open game.
- {"session":Dew$nj,"userid":20134}

/join/:username/:session (e.g. "http://localhost/register/julianw/Dew$nj")
- {"session":Dew$nj,"userid":20134}

### Start a Game
/start/:session
- {"status":"Game started. 4 people are in the game", status_code:0}

### Get Next Question
/get/:userid  (e.g. "http://localhost/get/20134/")
- {"status":"Wait for other players", "question_no":0}
- {"status":"Question 12/20", , "question_no":12, "question":"Three of these animals hibernate. Which one does not?", 
    choices:{"A":"Mouse","B":"Sloth","C":"Frog","D":"Snake"}}
- {"status":"You are the winner!"}

### Current Scores
/scores/:session
- {"julianw":13, "RunningGeek":12, "DW":10}

### Answer a Question
/answer/:userid/:question_no/:answer (e.g. "http://localhost/answer/20134/12/A")
- {"status":"Correct!", "win":6, "loss":3}
