import { CardResource } from '../types';
import { validateNumber } from '../util/validateNumber';

export function calcCard(card: CardResource): number {
  const { basePoint, endBonus } = card;

  validateNumber(basePoint);
  validateNumber(endBonus);

  const result = basePoint + endBonus;

  return result;
}
