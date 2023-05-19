import {Link} from 'react-router-dom';
import './NavBar.css';

// src/components/TestNavBar.js
const TestNavBar = () => {
    return (
        <div className="header">
            <img src="https://logos-world.net/wp-content/uploads/2021/04/Capital-One-Emblem.jpg" alt="capitalOneLogo"style={{ width: 200, height: 100}}></img>
            <h1 className="logo">Innovative Banking</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to='/stats'>Statistics</Link>
                <Link to="/todo">To-Do</Link>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6_J9wj3YnLT5uvm5gAs-ZC2ec_M9MNvK8A&usqp=CAU" style={{ width: 100, height: 100}}></img>
        </div>
    );
}

export default TestNavBar;