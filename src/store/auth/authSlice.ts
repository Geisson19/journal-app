import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface authState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

const initialState: authState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state /* action: PayloadAction<number>*/) => {},
    logout: (state, action: PayloadAction<number>) => {},
    checkCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkCredentials } = authSlice.actions;

export default authSlice.reducer;
