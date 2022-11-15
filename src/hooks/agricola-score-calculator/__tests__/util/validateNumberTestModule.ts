export function validateNumberTestModule(fn: Function) {
  describe('validateNumberTestModule', () => {
    describe('[Bad]', () => {
      test('cannot input negative integer', () => {
        const badCase = -1;

        expect(() => fn(badCase)).toThrowError(Error);
      });

      test('cannot input float integer', () => {
        const badCase = 1.5;

        expect(() => fn(badCase)).toThrowError(Error);
      });
    });
  });
}
