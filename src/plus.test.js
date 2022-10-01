function plus(a, b) {
  return a - b;
}

test('plus', () => {
  expect(plus(1, 2)).toBe(3);
});
