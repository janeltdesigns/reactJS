import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as  serviceWorker from './serviceWorker';
import * as  serviceWorkerRegistration from './serviceWorkerRegistration';
import * as renderUsers from './renderUsers';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

