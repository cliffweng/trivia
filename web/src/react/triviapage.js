import React from 'react';
import axios from 'axios';
import {Form,Alert,ListGroup} from 'react-bootstrap';
import {FormSelect} from './widgets';

let triviaServer = "http://trivia.julianweng.com";
// let triviaServer = "";
class SingleUser extends React.Component {
    state = {
        question: {"question":"Click anywhere on the question to get the next question, then click on a selection below to answer. Click to start!", choices: {}, no:0},
        category: "",
        categories: ["All categories"],
        showAnswer: false,
        totalCorrect:0,
        totalWrong:0,
        totalQuestions:0,
        v:'success',
        answer:""
    }
    answer (key,ans) {
      if(ans === this.state.question.answer) {
        this.setState({ totalCorrect: this.state.totalCorrect + 1, v:'success'});
      } else {
        this.setState({ totalWrong: this.state.totalWrong + 1, v:'warning'});
      }
      this.setState({answer:key, showAnswer: true});
    }
    handleSelect (event) {
      if (event !== null)
        this.setState({category: event.target.value});
    }
    handleQuestion = event => {
        event.preventDefault();
        var url = triviaServer+`/question/`;
        if (this.state.category !== "All categories")
          url = triviaServer+`/question/`+this.state.category;
        axios.get(url)
        .then(res => {
          this.setState({question: res.data, showAnswer:false, totalQuestions: this.state.totalQuestions + 1, answer:""}) ;
        })
    }
    componentDidMount() {
      axios.get(triviaServer+`/categories/`)
        .then(res => {
          var cats = res.data;
          cats.splice(0, 0, "All categories");
          this.setState({categories: cats}) ;
        })

    }
    render() {
      return (
        <div>
        <Alert variant='info'>
         total:<b>{this.state.totalQuestions}</b>, right:<b>{this.state.totalCorrect}</b>, 
         wrong:<b>{this.state.totalWrong}</b></Alert>
        <div class="form-group">
          <FormSelect name=""
            onChange={(e) => this.handleSelect(e)}
            options={this.state.categories}
          />
          {/* <div>#{this.state.question.no}</div> */}
          <h3 onClick={this.handleQuestion}>{this.state.question.question}</h3>
        </div>
        <div>
        <ListGroup>
          {Object.entries(this.state.question.choices).map(([key, value]) => 
            <ListGroup.Item disabled={this.state.showAnswer} key={key} onClick={(e) => this.answer(key,value)}>({key}) {value}</ListGroup.Item>)}
        </ListGroup>

        { this.state.showAnswer ? <Alert variant={this.state.v} class="display-4">{this.state.question.answer} (you answered {this.state.answer})</Alert> : null }
        </div>
        </div>
        )
      }
}
class MultiUser extends React.Component {
    render() {
        return (
        <div>
          <h2 class="display-4">Multi-User Trivia Is Coming Soon...</h2>
        </div>
        )
      }
}

export {SingleUser,MultiUser};