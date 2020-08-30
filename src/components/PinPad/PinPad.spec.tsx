import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PinPad } from './PinPad';

describe('PinPad', () => {
  it('should display a button with value "1"', () => {
    const renderResult: RenderResult = render(
      <PinPad/>,
    );
    expect(renderResult.queryByText('1')).toBeTruthy();
  });
});