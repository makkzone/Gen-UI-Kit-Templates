import React from 'react';
import { Amplify, Logger } from 'aws-amplify';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';

import '@cloudscape-design/global-styles/index.css';
import './App.css';

Amplify.Logger.LOG_LEVEL = process.env.NODE_ENV === 'development' ? 'DEBUG' : 'WARNING';
const logger = new Logger('App');

const App = () => {


  return (
    <div className="App">
        <HashRouter>
          <Routes />
        </HashRouter>
    </div>
  );
};

export default App;
