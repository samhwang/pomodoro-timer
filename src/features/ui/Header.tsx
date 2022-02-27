import { Typography } from '@mui/material';

export default function Header() {
  return (
    <Typography
      variant="h1"
      sx={{
        textAlign: 'center',
        marginTop: 4,
      }}
    >
      Pomodoro Timer
    </Typography>
  );
}
