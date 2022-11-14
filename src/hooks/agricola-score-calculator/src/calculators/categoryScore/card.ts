import { CardResource } from '../../types';
import { calculateCardBasePoint, calculateCardEndBonus } from '../baseScore';

export function calculateCard(card: CardResource): number {
  const { basePoint, endBonus } = card;

  const result =
    calculateCardBasePoint(basePoint) + calculateCardEndBonus(endBonus);

  return result;
}
