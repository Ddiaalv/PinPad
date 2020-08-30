import { checkIfPinIsCorrect, getStatusMessage, getUserPin } from './PinPad';

describe('PinPad service', () => {
  const correctPin = '111111';
  describe('checkIfPinIsCorrect', () => {
    it('should return true if pins are equals', () => {
      const irrelevantStatus = checkIfPinIsCorrect('111111', correctPin);
      expect(irrelevantStatus).toBeTruthy();
    });
    it('should return false if pins are not equals', () => {
      let irrelevantStatus = checkIfPinIsCorrect('111231', correctPin);
      expect(irrelevantStatus).toBeFalsy();
      irrelevantStatus = checkIfPinIsCorrect('123', correctPin);
      expect(irrelevantStatus).toBeFalsy();
    });
  });

  describe('getStatusMessage', () => {
    it('should return true if user pin length is equals to 6', () => {
      const irrelevantStatus = getStatusMessage('111111', correctPin);
      expect(irrelevantStatus).toBeTruthy();
    });
    it('should return false if user pin length is lower than 6 and is not equal to correct pin', () => {
      let irrelevantStatus = getStatusMessage('21', correctPin);
      expect(irrelevantStatus).toBeFalsy();
      irrelevantStatus = getStatusMessage('212121', correctPin);
      expect(irrelevantStatus).toBeFalsy();
    });
  });

  describe('getUserPin', () => {
    it('should concat a entry value with last value typed', () => {
      let irrelevantPin = getUserPin('11', '2');
      expect(irrelevantPin).toBe('112');
      irrelevantPin = getUserPin('1123', '4');
      expect(irrelevantPin).toBe('11234');
    });
  });
});