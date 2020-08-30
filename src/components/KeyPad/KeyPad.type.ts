import * as React from 'react';

export interface KeyPadProps {
  text: string;
  getKeyValue?: (event: React.MouseEvent<HTMLButtonElement>) => string | void;
}