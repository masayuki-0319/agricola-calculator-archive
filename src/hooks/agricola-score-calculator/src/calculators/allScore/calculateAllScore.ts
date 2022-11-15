import { ScoreResource } from '../../types';
import {
  calculateFamily,
  calculateCard,
  calculateFarms,
  calculateProducts,
} from '../categoryScore';

export function calculateResult(scoreResource: ScoreResource): number {
  const { farm, family, card, products } = scoreResource;

  const farmScore = calculateFarms(farm);
  const familyScore = calculateFamily(family);
  const cardScore = calculateCard(card);
  const productsScore = calculateProducts(products);

  const result = farmScore + familyScore + cardScore + productsScore;

  return result;
}
