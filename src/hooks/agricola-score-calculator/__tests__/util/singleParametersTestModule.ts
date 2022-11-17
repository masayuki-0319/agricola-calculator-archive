export type TestCase = { input: number; expected: number };

export function singleParametersTest(
  fn: (args: number) => number,
  testCases: TestCase[]
) {
  test.each(testCases)('parameters ( %o )', (testCase) => {
    expect(fn(testCase.input)).toBe(testCase.expected);
  });
}
