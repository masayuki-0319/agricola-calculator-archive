import {
  calculateCardBasePoint,
  calculateCardEndBonus,
} from '../../src/calculators/baseScore';
import { singleParametersTest } from '../util/singleParametersTestModule';
import { validateNumberTestModule } from '../util/validateNumberTestModule';

describe('Test baseScore', () => {
  describe('calculateCardBasePoint:', () => {
    function testFunction() {
      return calculateCardBasePoint;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 1,
          expected: 1,
        },
        {
          input: 5,
          expected: 5,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateCardEndBonus:', () => {
    function testFunction() {
      return calculateCardEndBonus;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 1,
          expected: 1,
        },
        {
          input: 5,
          expected: 5,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });
});
