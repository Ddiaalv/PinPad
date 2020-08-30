import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScreenPad } from '../ScreenPad/ScreenPad';
import { KeyPad } from '../KeyPad/KeyPad';
import { getStatusMessage, getUserPin } from '../../domain/service/PinPad';

export const PinPad: React.FC<{}> = () => {
  const [keysPressed, setKeysPressed] = useState<string>('');
  const [messageStatus, setMessageStatus] = useState<boolean>(false);
  const correctPin = '111111';
  const keyValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // CREAR ARRAY de 0 a 9

  useEffect(() => {
    setMessageStatus(getStatusMessage(keysPressed, correctPin));
  }, [keysPressed]);

  const getValueKeyPressed = (event: React.MouseEvent<HTMLButtonElement>) => {
    setKeysPressed(getUserPin(keysPressed, event.currentTarget.value));
  };

  return (
    <div className="PinPad">
      <ScreenPad pinStatus={messageStatus} pressedPin={keysPressed}/>
      {keyValues.map(keyValue => (
        <KeyPad text={keyValue.toString()} key={keyValue} getKeyValue={getValueKeyPressed}/>
      ))}
    </div>
  );
};

PinPad.displayName = 'PinPad';
