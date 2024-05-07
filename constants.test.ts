import { RISC0_PRIVACY_POLICY_URL, RISC0_TERMS_OF_SERVICE_URL } from './constants';

describe('Constants', () => {
  it('should have correct RISC0_PRIVACY_POLICY_URL', () => {
    expect(typeof RISC0_PRIVACY_POLICY_URL).toBe('string');
    expect(RISC0_PRIVACY_POLICY_URL).toBe('https://www.risczero.com/policy');
  });

  it('should have correct RISC0_TERMS_OF_SERVICE_URL', () => {
    expect(typeof RISC0_TERMS_OF_SERVICE_URL).toBe('string');
    expect(RISC0_TERMS_OF_SERVICE_URL).toBe('https://www.risczero.com/terms-of-service');
  });
});