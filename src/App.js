import React from 'react';

import './App.css';
import { Header, Sidebar, Feed } from './utils';

function App() {
  return (
    <div className="app">
      
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets go Here: */}
      </div>

    </div>
  );
}

export default App;
