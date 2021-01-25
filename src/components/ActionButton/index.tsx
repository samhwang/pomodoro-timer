import type { MouseEventHandler } from 'react';
import { Button } from '@material-ui/core';

interface IActionButton {
  label: string;
  onClick: MouseEventHandler;
  color: 'primary' | 'secondary' | 'default' | 'inherit';
}

function ActionButton({
  label = '',
  onClick = () => {},
  color = 'default',
}: IActionButton) {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {label}
    </Button>
  );
}

export default ActionButton;
