import {
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateField,
  calculatePastures,
} from '../../src';
import { singleParametersTest } from '../util/singleParametersTestModule';
import { validateNumberTestModule } from '../util/validateNumberTestModule';

describe('Test baseScore', () => {
  describe('calculateField:', () => {
    function testFunction() {
      return calculateField;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 0,
          expected: -1,
        },
        {
          input: 1,
          expected: -1,
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
          input: 4,
          expected: 3,
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

  describe('calculatePastures:', () => {
    function testFunction() {
      return calculatePastures;
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
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateEmtpyFamyard:', () => {
    function testFunction() {
      return calculateEmtpyFamyard;
    }

    describe('[Fine]', () => {
      const testCases = [
        {
          input: 1,
          expected: -1,
        },
        {
          input: 5,
          expected: -5,
        },
      ];

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateFancedStable:', () => {
    function testFunction() {
      return calculateFancedStable;
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
