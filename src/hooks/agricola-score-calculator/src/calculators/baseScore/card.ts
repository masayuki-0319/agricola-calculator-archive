import { validateNumber } from '../../util/validateNumber';

export function calculateCardBasePoint(basePoint: number) {
  validateNumber(basePoint);

  return basePoint;
}

export function calculateCardEndBonus(endBonus: number) {
  validateNumber(endBonus);

  return endBonus;
}
