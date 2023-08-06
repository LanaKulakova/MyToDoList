import {Component} from 'react';
import check from "./check.jpg";
export class Todolist extends Component {
    state = {
        userInput: '',
        todoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

addItem(input) {
    if (input === '') {
        alert ("Please enter an item")
    } else {
    let listArray = this.state.todoList;
    listArray.push(input);
    this.setState({todoList: listArray, userInput: ""})
}}

deleteItem() {
    let listArray = this.state.todoList;
    listArray = [];
    this.setState({todoList: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}
        render() {
            return(
                <div>
                <form onSubmit = {this.onFormSubmit}>
                <div className="container">
                    <input type="text" 
                    placeholder="I want to buy..."
                    onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                    value = {this.state.userInput}  />
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput) } className="add" >Add</button>
                </div>
                <ul>
                    {this.state.todoList.map((item, index) => (
                        <li onClick = {this.crossedWord} key={index} >
                            <img src={check} width="30px" alt="bagimage" />
                            {item} </li>
                    ))}
                    
                </ul>
                <div className="container">
                    <button onClick = {() => this.deleteItem() } className="delete"> Delete </button>
                </div>
                </form>
                </div>
            )
        }


}
