import React from 'react';

import './App.css';
import { Header, Sidebar } from './utils';

function App() {
  return (
    <div className="app">
      


      {/* Header Component lives here: */}
      <Header />

      {/* App Body goes here: */}

      <div className="app__body">
        <Sidebar />
      </div>

        {/* Sidebar goes here */}

        {/* Feed goes here: */}

        {/* Widgets go Here: */}


    </div>
  );
}

export default App;
