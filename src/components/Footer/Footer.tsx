import React from 'react';
import AppFooterStyles from "./Footer.module.scss";

function AppFooter() {
  return (
    <div className={AppFooterStyles.body_wrapper}>
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

export default AppFooter;