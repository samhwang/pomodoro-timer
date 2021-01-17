import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: '#282C34',
    display: 'flex',
    flexDirection: 'column',
    color: '#FFF',
    textAlign: 'center',
    minHeight: '100vh',
    fontSize: 'calc(10px + 2vmin)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  code: {
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  },
});

export default useStyles;
