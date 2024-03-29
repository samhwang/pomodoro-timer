import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import TimerContainer from './features/timer/TimerContainer';
import reportWebVitals from './reportWebVitals';

async function renderRoot() {
  const RootComponent = (
    <StrictMode>
      <TimerContainer />
    </StrictMode>
  );

  ReactDOM.render(RootComponent, document.getElementById('root'));
}

renderRoot();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
