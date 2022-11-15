import {
  calculateBeggingCard,
  calculateFamilyMember,
  calculateRoom,
} from '../../src';
import { FamilyResource } from '../../src/types';
import { singleParametersTest } from '../util/singleParametersTestModule';
import { validateNumberTestModule } from '../util/validateNumberTestModule';

describe('Test baseScore', () => {
  describe('calculateRoom:', () => {
    function testFunction() {
      return calculateRoom;
    }

    describe('[Fine]', () => {
      test('case 1', () => {
        const fineInput: FamilyResource['room'] = {
          type: 'wood',
          count: 2,
        };
        const expectedOutput = 0;

        expect(testFunction()(fineInput)).toBe(expectedOutput);
      });

      test('case 2', () => {
        const fineInput: FamilyResource['room'] = {
          type: 'cray',
          count: 3,
        };
        const expectedOutput = 3;

        expect(testFunction()(fineInput)).toBe(expectedOutput);
      });

      test('case 3', () => {
        const fineInput: FamilyResource['room'] = {
          type: 'stone',
          count: 4,
        };
        const expectedOutput = 8;

        expect(testFunction()(fineInput)).toBe(expectedOutput);
      });
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateFamilyMember:', () => {
    function testFunction() {
      return calculateFamilyMember;
    }

    describe('[Fine]', () => {
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

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });

  describe('calculateBeggingCard:', () => {
    function testFunction() {
      return calculateBeggingCard;
    }

    describe('[Fine]', () => {
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

      singleParametersTest(testFunction(), testCases);
    });

    describe('[Bad]', () => {
      validateNumberTestModule(testFunction());
    });
  });
});
