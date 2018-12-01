import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import * as serviceWorker from './serviceWorker';

const store = configureStore();

// routes
const pageA = () => <div>Page 1</div>
const pageB = () => <div>Page 2</div>


const App = () => {
    return (
        <Provider store={store}>     
            <Router>
                <div>
                    <Route path="/a" exact component={pageA}/>
                    <Route path="/b" exact component={pageB}/>
                </div>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
