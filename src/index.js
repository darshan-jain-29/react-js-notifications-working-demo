import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/custom.css';
import Main from './components/Main/main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
