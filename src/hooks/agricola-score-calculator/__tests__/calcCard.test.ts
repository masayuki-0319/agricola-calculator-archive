import { calcCard } from '../src/calculateResource';

describe('Core test calcCard', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput = { basePoint: 1, endBonus: 1 };

      expect(calcCard(fineInput)).toBe(2);
    });
  });

  describe('Bad:', () => {
    test('basePoint is negative integer', () => {
      const badInput = { basePoint: -1, endBonus: 1 };

      expect(() => calcCard(badInput)).toThrowError(Error);
    });

    test('endBonus is float integer', () => {
      const badInput = { basePoint: 1, endBonus: 0.1 };

      expect(() => calcCard(badInput)).toThrowError(Error);
    });
  });
});
