import TodoItem from './TodoItem'
import { todoList } from './TodoList';
import './TodoPage.css'

const TestTodoPage = () => {
    return (
        <div>
            <h1 className="title">To-Do</h1>
            <div className="todos">
              {todoList.map((todo, index) => (
                  <TodoItem name={todo.name} type={todo.type} amountSaved={todo.amountSaved} amountNeeded={todo.amountNeeded} key={index}/>
              ))}
            </div>
            <p className="description">
                Current Discretionary Income: $1,245.34 <br></br> <br></br>
                
                Welcome to Our To-Do function! <br></br>
                The number you see above is your current discretionary income that you can put towards anything you need or want.
                However, we encourage you to put in into something productive with our assistance. Below you can create a
                new Goal for you to achieve. These Goals serve as mini savings accounts that you can put money into 
                towards a specific purchase in the future. You can even automate bill payments by selecting the "repeating"
                option. Join us and say goodbye to financial illeracy and hello to smart saving! <br></br> <br></br>
                <button className="addGoal">Create A New Goal</button> 
                </p>
        </div>
    );
}

export default TestTodoPage;