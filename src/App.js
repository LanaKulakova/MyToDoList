import './App.css';
import image from "./checklist.jpg"
import imageTwo from './second.jpg';
import { Todolist } from "./Todolist"


function App() {
  return (
    <div className="app">
      <div className="container">
      <img  src={image} width="300px" alt="todolist" />
       </div> 
       <div className="container">
        <h1>To Do List</h1>
        </div>
        <Todolist />
        <div className="container">
      <img src={imageTwo} width="200px" alt="woman" />
      </div>
    </div>
  );
}

export default App;
