import { Avatar, Box } from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';

export default function TimerBox() {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <AccessAlarm />
      </Avatar>
      Pomodoro Timer
      <Box marginTop={1}>Test</Box>
    </Box>
  );
}
