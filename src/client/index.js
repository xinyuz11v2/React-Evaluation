import React from 'react';
import ReactDOM from 'react-dom';

import '../client/index.css';

const App = () => {
    return(
        <h1>You should see a red color text here</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
