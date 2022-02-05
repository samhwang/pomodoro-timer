import { IconButton, Grid, Typography } from '@mui/material';
import {
  ArrowUpward,
  ArrowDownward,
  PlayArrow,
  Pause,
  Refresh,
} from '@mui/icons-material';

export default function TimerBox() {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        marginTop: 8,
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h1">25 + 5 Clock</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3" id="break-label">
          Break Length
        </Typography>
        <IconButton id="break-increment">
          <ArrowUpward />
        </IconButton>
        <Typography id="break-length" variant="h3">
          5
        </Typography>
        <IconButton id="break-decrement">
          <ArrowDownward />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <Typography id="session-label" variant="h3">
          Session Length
        </Typography>
        <IconButton id="session-increment">
          <ArrowUpward />
        </IconButton>
        <Typography id="session-length" variant="h3">
          25
        </Typography>
        <IconButton id="session-decrement">
          <ArrowDownward />
        </IconButton>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Typography id="timer-label" variant="h3">
            Session
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography id="time-left" variant="h3">
            00:00
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <IconButton id="start_stop">
            <PlayArrow />
            <Pause />
          </IconButton>
          <IconButton id="reset">
            <Refresh />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
