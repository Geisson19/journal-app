import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuth, startGoogleLogin } from '../../store/auth/';

export const LoginPage = () => {
  const { formState, onInputChange }: any = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formState);
    dispatch(checkingAuth() as any);
  };

  const handleGoogleLogin = () => {
    console.log('google login');
    dispatch(startGoogleLogin() as any);
  };

  return (
    <AuthLayout title="Log In">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="email"
              fullWidth
              label="Email"
              name="email"
              value={formState.email}
              onChange={onInputChange}
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="password"
              fullWidth
              label="Password"
              name="password"
              value={formState.password}
              onChange={onInputChange}
              type="password"
              variant="outlined"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth type="submit">
                Log In
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth onClick={handleGoogleLogin}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google Login</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" component={RouterLink} to="/auth/signup">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
