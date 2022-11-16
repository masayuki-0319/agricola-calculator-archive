import { ScoreResource } from '../../types';
import {
  calculateFamily,
  calculateCard,
  calculateFarmFacility,
  calculateProducts,
} from '../categoryScore';

export function calculateResult(scoreResource: ScoreResource): number {
  const { farm, family, card, products } = scoreResource;

  const farmFacilityScore = calculateFarmFacility(farm);
  const familyScore = calculateFamily(family);
  const cardScore = calculateCard(card);
  const productsScore = calculateProducts(products);

  const result = farmFacilityScore + familyScore + cardScore + productsScore;

  return result;
}
