import { checkCredentials } from './authSlice';

export const checkingAuth = () => {
  return async (dispatch: any) => {
    dispatch(checkCredentials());
  };
};

export const startGoogleLogin = () => {
  return async (dispatch: any) => {
    dispatch(checkCredentials());
  };
};
