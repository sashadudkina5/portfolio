import React from 'react';
import AppStyles from "./App.module.scss";
import MainContent from '../MainContent/MainContent'

function App() {
  return (
    <div className={AppStyles.body_wrapper}>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <MainContent />

    </div>
  );
}

export default App;
