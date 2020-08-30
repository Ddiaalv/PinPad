import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ScreenPad } from './ScreenPad';

describe('ScreenPad', () => {
  const incorrectPin = '112312';
  const correctPin = '111111';
  it('should display "error" as message if pinStatus is false', () => {
    const renderResult: RenderResult = render(
      <ScreenPad pinStatus={false} pressedPin={incorrectPin}/>,
    );
    expect(renderResult.queryByText('Error')).toBeTruthy();
  });
  it('should display "correct" as message if pinStatus is false', () => {
    const renderResult: RenderResult = render(
      <ScreenPad pinStatus={true} pressedPin={correctPin}/>,
    );
    expect(renderResult.queryByText('Correcto')).toBeTruthy();
  });
  it('should display "12345"', () => {
    const irrelevantPin = '12345';
    const renderResult: RenderResult = render(
      <ScreenPad pinStatus={false} pressedPin={irrelevantPin}/>,
    );
    expect(renderResult.queryByText(irrelevantPin)).toBeTruthy();
  });
});