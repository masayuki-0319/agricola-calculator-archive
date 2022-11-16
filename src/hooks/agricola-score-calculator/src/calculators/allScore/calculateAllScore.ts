import { ScoreResource } from '../../types';
import {
  calculateFamily,
  calculateCard,
  calculateFarmFacility,
  calculateProducts,
} from '../categoryScore';

export function calculateAllScore(scoreResource: ScoreResource): number {
  const { farmFacility, family, card, products } = scoreResource;

  const farmFacilityScore = calculateFarmFacility(farmFacility);
  const familyScore = calculateFamily(family);
  const cardScore = calculateCard(card);
  const productsScore = calculateProducts(products);

  const result = farmFacilityScore + familyScore + cardScore + productsScore;

  return result;
}
