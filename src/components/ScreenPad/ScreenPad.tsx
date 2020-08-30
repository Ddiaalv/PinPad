import * as React from 'react';
import { ScreenPadProps } from './PinPad.type';

export const ScreenPad: React.FC<ScreenPadProps> = ({ pressedPin, pinStatus }) => (
  <div className="ScreenPad">
    {pressedPin.length === 6 ? pinStatus ? 'Correcto' : 'Error' : pressedPin}
  </div>
);

ScreenPad.displayName = 'ScreenPad';
