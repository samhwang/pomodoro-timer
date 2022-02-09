import { render, fireEvent } from '@testing-library/react';
import SetTimerInput from './SetTimerInput';

it('Should render set timer input and fire events correctly', () => {
  const fakeInc = jest.fn();
  const fakeDec = jest.fn();
  const { container } = render(
    <SetTimerInput
      timerValue={1000}
      inc={() => fakeInc()}
      dec={() => fakeDec()}
      type="test"
    />
  );

  const incButton = container.querySelector('#test-increment');
  expect(incButton).toBeInTheDocument();
  fireEvent.click(incButton!);
  expect(fakeInc).toBeCalled();

  const decButton = container.querySelector('#test-decrement');
  expect(decButton).toBeInTheDocument();
  fireEvent.click(decButton!);
  expect(fakeDec).toBeCalled();
});
