// src/App.js
import React from 'react';
import { log } from './logging';

function App() {
  log('This is an info message', 'info');
  log('This is a debug message', 'debug');
  log('This is a warning', 'warn');
  log('This is an error message', 'error');

  return (
    <div className="App">
      <h1>Check your console for logs!</h1>
    </div>
  );
}

export default App;
