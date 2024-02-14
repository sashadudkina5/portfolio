import React from 'react';
import AppHeaderStyles from "./AppHeader.module.scss";

function AppHeader() {
  return (
    <div className={AppHeaderStyles.body_wrapper}>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppHeader;
