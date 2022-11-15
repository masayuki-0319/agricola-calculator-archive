import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
} from '../../src/calculators/baseScore';
import { baseScoreTest } from '../util/baseScoreTestModule';

describe('Test baseScore', () => {
  describe('calculateField:', () => {
    const testFunction = calculateField;

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

    baseScoreTest(testFunction, testCases);
  });

  describe('calculatePastures:', () => {
    const testFunction = calculatePastures;

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

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateEmtpyFamyard:', () => {
    const testFunction = calculateEmtpyFamyard;

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

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateFancedStable:', () => {
    const testFunction = calculateFancedStable;

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

    baseScoreTest(testFunction, testCases);
  });
});
