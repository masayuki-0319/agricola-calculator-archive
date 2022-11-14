import {
  calcCard,
  calcFamily,
  calcFarms,
  calcProducts,
} from './calculateResource';
import { ScoreResource } from './types';

export function calculateResult(scoreResource: ScoreResource): number {
  const { farm, family, card, products } = scoreResource;

  const farmScore = calcFarms(farm);
  const familyScore = calcFamily(family);
  const cardScore = calcCard(card);
  const productsScore = calcProducts(products);

  const result = farmScore + familyScore + cardScore + productsScore;

  return result;
}
