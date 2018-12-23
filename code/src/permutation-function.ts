export function makePairs<T>(items: T[]): T[][] {
  const [a, b, c, d] = items;
  return [[a, b], [b, c], [c, d]];
}

export function* threeAryPermutationGenerator<T>(a: T, b: T, c: T) {
  yield [a, b, c];
  yield [a, c, b];
  yield [b, a, c];
  yield [b, c, a];
  yield [c, a, b];
  yield [c, b, a];
}
