import {
  calculateRoom,
  calculateFamilyMember,
  calculateBeggingCard,
} from '../../src/calculators/baseScore';
import { FamilyResource } from '../../src/types';
import { baseScoreTest } from '../util/baseScoreTestModule';
import { validateNumberTestModule } from '../util/validateNumberTestModule';

describe('Test baseScore', () => {
  describe('calculateRoom:', () => {
    const testFunction = calculateRoom;

    describe('[Fine]', () => {
      test('case 1', () => {
        const fineInput: FamilyResource['room'] = {
          type: 'wood',
          count: 2,
        };
        const expectedOutput = 0;

        expect(testFunction(fineInput)).toBe(expectedOutput);
      });

      test('case 2', () => {
        const fineInput: FamilyResource['room'] = {
          type: 'cray',
          count: 3,
        };
        const expectedOutput = 3;

        expect(testFunction(fineInput)).toBe(expectedOutput);
      });

      test('case 3', () => {
        const fineInput: FamilyResource['room'] = {
          type: 'stone',
          count: 4,
        };
        const expectedOutput = 8;

        expect(testFunction(fineInput)).toBe(expectedOutput);
      });
    });

    // describe('[Bad]', () => {
    //   validateNumberTestModule(testFunction);
    // });
  });

  describe('calculateFamilyMember:', () => {
    const testFunction = calculateFamilyMember;

    const testCases = [
      {
        input: 2,
        expected: 6,
      },
      {
        input: 3,
        expected: 9,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });

  describe('calculateBeggingCard:', () => {
    const testFunction = calculateBeggingCard;

    const testCases = [
      {
        input: 1,
        expected: -3,
      },
      {
        input: 2,
        expected: -6,
      },
    ];

    baseScoreTest(testFunction, testCases);
  });
});
