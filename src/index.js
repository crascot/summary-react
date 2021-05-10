import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/state';
import { addExample, addWorks } from './redux/state';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addExample={addExample} addWorks={addWorks} />
  </React.StrictMode>,
  document.getElementById('root')
);