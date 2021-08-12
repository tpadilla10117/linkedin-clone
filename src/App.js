import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { selectUser, logout, login } from './features/userSlice';
import { auth } from './firebase/firebase';
import { Header, Sidebar, Feed , Login} from './utils';

function App() {

/* Pull in the selectUser Selector from ./features/userSlice: */
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

/* Used to persist login state */
/* onAuthStateChange used to persist login: */
  useEffect( () => {
    auth.onAuthStateChanged( (userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch( 
          login({
            email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoUrl,

        }))
      } else {
        //user is logged out
        dispatch( logout() );
      }
    })
  }, []);

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
