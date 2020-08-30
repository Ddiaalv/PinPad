import * as React from 'react';
import { KeyPadProps } from './KeyPad.type';

export const KeyPad: React.FC<KeyPadProps> = ({ text, getKeyValue }) => (
  <button className="KeyPad" value={text}
          onClick={getKeyValue}>
    {text}
  </button>
);

KeyPad.displayName = 'KeyPad';
