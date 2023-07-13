import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register } from './operations';

const initialState = {//в браузері(redux actions)
  user: { name: null, email: null },
  token: null,//JWT (JSON Web Token) наша перепустка на сервер
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;//зберігаю інформацію про користувача
      state.token = action.payload.token;//зберігаю токен
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer