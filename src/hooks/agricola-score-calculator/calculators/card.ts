import { CardResource } from '../types';

export function calcCard(card: CardResource): number {
  const { basePoint, endBonus } = card;

  const result = basePoint + endBonus;

  return result;
}
