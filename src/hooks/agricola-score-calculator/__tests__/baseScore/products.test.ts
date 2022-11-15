import {
  calculateCattle,
  calculateGrain,
  calculateSheep,
  calculateVegetables,
  calculateWildBoar,
} from '../../src';
import { singleParametersTest } from '../util/singleParametersTestModule';
import { validateNumberTestModule } from '../util/validateNumberTestModule';

describe('Test baseScore', () => {
  describe('calculateGrain:', () => {
    function testFunction() {
      return calculateGrain;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 0,
          expected: -1,
        },
        {
          input: 1,
          expected: 1,
        },
        {
          input: 2,
          expected: 1,
        },
        {
          input: 4,
          expected: 2,
        },
        {
          input: 5,
          expected: 2,
        },
        {
          input: 6,
          expected: 3,
        },
        {
          input: 7,
          expected: 4,
        },
        {
          input: 9,
          expected: 4,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateVegetables:', () => {
    function testFunction() {
      return calculateVegetables;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 0,
          expected: -1,
        },
        {
          input: 1,
          expected: 1,
        },
        {
          input: 2,
          expected: 2,
        },
        {
          input: 3,
          expected: 3,
        },
        {
          input: 4,
          expected: 4,
        },
        {
          input: 5,
          expected: 4,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateSheep:', () => {
    function testFunction() {
      return calculateSheep;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 0,
          expected: -1,
        },
        {
          input: 1,
          expected: 1,
        },
        {
          input: 2,
          expected: 1,
        },
        {
          input: 4,
          expected: 2,
        },
        {
          input: 5,
          expected: 2,
        },
        {
          input: 6,
          expected: 3,
        },
        {
          input: 7,
          expected: 3,
        },
        {
          input: 8,
          expected: 4,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateWildBoar:', () => {
    function testFunction() {
      return calculateWildBoar;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 0,
          expected: -1,
        },
        {
          input: 1,
          expected: 1,
        },
        {
          input: 2,
          expected: 1,
        },
        {
          input: 3,
          expected: 2,
        },
        {
          input: 5,
          expected: 3,
        },
        {
          input: 7,
          expected: 4,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateCattle:', () => {
    function testFunction() {
      return calculateCattle;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 0,
          expected: -1,
        },
        {
          input: 1,
          expected: 1,
        },
        {
          input: 2,
          expected: 2,
        },
        {
          input: 3,
          expected: 2,
        },
        {
          input: 4,
          expected: 3,
        },
        {
          input: 5,
          expected: 3,
        },
        {
          input: 6,
          expected: 4,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });
});
