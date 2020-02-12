import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BasicForm from './BasicForm';
import SyncValidationForm from './SyncValidationForm';
import MaterialSyncForm from './MaterialSyncForm';

ReactDOM.render(
    // <App />, document.getElementById('root'),
    // <BasicForm />, document.getElementById('basicForm')
    // <SyncValidationForm />, document.getElementById('syncForm')
    <MaterialSyncForm />, document.getElementById('matSyncForm')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
