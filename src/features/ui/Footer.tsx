import { Link, Typography } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      variant="body2"
      sx={{
        textAlign: 'center',
        color: 'text.secondary',
        marginTop: 8,
        marginBottom: 4,
      }}
    >
      {'Built with '}
      <Link color="inherit" href="https://vitejs.dev/">
        Vite
      </Link>
      {' and '}
      <Link color="inherit" href="https://https://reactjs.org/">
        React
      </Link>
      {'. Copyright © '}
      <Link color="inherit" href="https://samhwang.github.io/">
        Sam Huynh
      </Link>{' '}
      {currentYear}.
    </Typography>
  );
}
