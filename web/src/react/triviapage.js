import React from 'react';
import axios from 'axios';
import {Form,Alert} from 'react-bootstrap';
import {FormSelect} from './widgets';

class SingleUser extends React.Component {
    state = {
        question: {"question":"Waiting for the server...", choices: {}},
        category: "",
        categories: ["All categories"],
        showAnswer: false,
        totalCorrect:0,
        totalWrong:0,
        totalQuestions:0,
        v:'success'
    }
    handleAnswer (event) {
      if (event !== null) {
        if(event.target.value.substring(4) === this.state.question.answer) {
          this.setState({ totalCorrect: this.state.totalCorrect + 1, v:'success'});
        } else {
          this.setState({ totalWrong: this.state.totalWrong + 1, v:'warning'});
        }
        this.setState({ showAnswer: true});
      }
    }
    handleSelect (event) {
      if (event !== null)
        this.setState({category: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        var url = `http://cw-surface:3000/question/`;
        if (this.state.category !== "All categories")
          url = `http://cw-surface:3000/question/`+this.state.category;
        axios.get(url)
        .then(res => {
          this.setState({question: res.data, showAnswer:false, totalQuestions: this.state.totalQuestions + 1}) ;
        })
    }
    componentDidMount() {
      axios.get(`http://cw-surface:3000/categories/`)
        .then(res => {
          var cats = res.data;
          cats.splice(0, 0, "All categories");
          this.setState({categories: cats}) ;
        })

    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <Alert variant='info' class="display-4">
         Total:<b>{this.state.totalQuestions}</b> , Corrects:<b>{this.state.totalCorrect}</b> , 
         Wrong:<b>{this.state.totalWrong}</b> </Alert>
        <div class="form-group">
          <FormSelect name=""
            onChange={(e) => this.handleSelect(e)}
            options={this.state.categories}
          />
          <button class="form-control" type="submit">Next Question</button>
          <div>#{this.state.question.no}</div>
          <h3>{this.state.question.question}</h3>
        </div>
        <div>
        <Form.Control value="" as="select" multiple onChange={(e) => this.handleAnswer(e)}>
          {Object.entries(this.state.question.choices).map(([key, value]) => 
            <option>({key}) {value}</option>)}
        </Form.Control>
        { this.state.showAnswer ? <Alert variant={this.state.v} class="display-4">{this.state.question.answer}</Alert> : null }
        </div>
        <div class="form-group">
        </div>
        </form>
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