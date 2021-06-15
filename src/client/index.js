import React from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';
import Hobbies from './components/Hobbies';
import '../client/index.css';

const App = () => {
    return(
        <div className="container">
            <div className="header">
                <h1>All Users</h1>
                <p>username and age</p>
            </div>
            <User />
            <div className="header">
                <h1>Age Demographic of Users with hobby</h1>
            </div>
            <Hobbies />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
