import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import demo from './demo';
import Demo1 from './Demo1';
import Demo3 from './Demo3';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo3/>, document.getElementById('root'));


// If you want your Demo to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
