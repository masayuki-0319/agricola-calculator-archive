import { singleParametersTest, TestCase } from './singleParametersTestModule';
import { validateNumberTestModule } from './validateNumberTestModule';

export function baseScoreTest(
  testFunction: (number: number) => number,
  fineTestCases: TestCase[]
) {
  describe('[Fine]', () => {
    singleParametersTest(testFunction, fineTestCases);
  });

  describe('[Bad]', () => {
    validateNumberTestModule(testFunction);
  });
}
