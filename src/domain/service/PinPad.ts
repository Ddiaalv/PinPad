export const checkIfPinIsCorrect = (keysPressed: string, correctPin: string): boolean => keysPressed === correctPin;
export const getStatusMessage = (userPin: string, pin: string): boolean => {
  const maxDigits = 6;
  if (userPin.length === maxDigits) {
    return checkIfPinIsCorrect(userPin, pin);
  }
  return false;
};
export const getUserPin = (userPin: string, eventValue: string): string => {
  const maxDigits = 6;
  if (userPin.length < maxDigits) {
    return userPin + eventValue;
  } else {
    return userPin;
  }
};