import { calculateCard } from '../../src/calculators/categoryScore';

describe('Core test calculateCard', () => {
  describe('Fine:', () => {
    test('basic', () => {
      const fineInput = { basePoint: 1, endBonus: 1 };

      expect(calculateCard(fineInput)).toBe(2);
    });
  });

  describe('Bad:', () => {
    test('basePoint is negative integer', () => {
      const badInput = { basePoint: -1, endBonus: 1 };

      expect(() => calculateCard(badInput)).toThrowError(Error);
    });

    test('endBonus is float integer', () => {
      const badInput = { basePoint: 1, endBonus: 0.1 };

      expect(() => calculateCard(badInput)).toThrowError(Error);
    });
  });
});
