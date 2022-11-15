type TestCase = { input: any; expected: any };

export function singleParametersTest(fn: Function, testCases: TestCase[]) {
  test.each(testCases)('parameters ( %o )', (testCase) => {
    expect(fn(testCase.input)).toBe(testCase.expected);
  });
}
