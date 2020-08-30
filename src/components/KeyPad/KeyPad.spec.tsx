import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { KeyPad } from './KeyPad';

describe('KeyPad', () => {
  it('should display a button with number 1', () => {
    const renderResult: RenderResult = render(
      <KeyPad text={'1'}/>,
    );
    expect(renderResult.queryByText('1')).toBeTruthy();
  });
});