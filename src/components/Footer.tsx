import { Grid, Typography, Link } from '@mui/material';

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <Grid item xs={12}>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: 'text.secondary',
          marginTop: 8,
          marginBottom: 4,
        }}
      >
        {'Built with '}
        <Link color="inherit" href="https://vitejs.dev/">
          Vite
        </Link>
        {'. Copyright © '}
        <Link color="inherit" href="https://samhwang.github.io/">
          Sam Huynh
        </Link>{' '}
        {currentYear}.
      </Typography>
    </Grid>
  );
}
