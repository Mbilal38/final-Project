// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './taskList';
import TaskForm from './taskForm';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={TaskList} />
                    <Route path="/create-task" component={TaskForm} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
