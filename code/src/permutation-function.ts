import { Cell } from './cell';

export function* cell_pair_permutation_generator(cells: Cell[]) {
  let ab: Cell[] = [cells[0], cells[1]];
  let bc: Cell[] = [cells[1], cells[2]];
  let cd: Cell[] = [cells[2], cells[3]];

  yield [ab, bc, cd];
  yield [ab, cd, bc];
  yield [bc, ab, cd];
  yield [bc, cd, ab];
  yield [cd, ab, bc];
  yield [cd, bc, ab];
}
