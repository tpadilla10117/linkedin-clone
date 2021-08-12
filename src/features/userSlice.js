import { createSlice } from '@reduxjs/toolkit';

/* Here we define a userSlice in Redux: */

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },

/* reducers = objects that are portions of the state */
/* actions = something user does - they have a payload (object we pass along) */
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null; //set user to null
    },

  },

});

//export the reducers
export const { login, logout } = userSlice.actions; 

// Selectors:
export const selectUser = (state) => state.user;

export default userSlice.reducer;