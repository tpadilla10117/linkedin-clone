import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import { Header, Sidebar, Feed , Login} from './utils';

function App() {

/* Pull in the selectUser Selector from ./features/userSlice: */
  const user = useSelector(selectUser);

  return (
    <div className="app">
      
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets go Here: */}
        </div>
      )}

    </div>
  );
}

export default App;
