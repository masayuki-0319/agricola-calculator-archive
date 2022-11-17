import type { ProductsResource } from '../../types';
import {
  calculateGrain,
  calculateVegetables,
  calculateSheep,
  calculateWildBoar,
  calculateCattle,
} from '../baseScore/products';

export function calculateProducts(products: ProductsResource): number {
  const { grain, vegetables, sheep, wildBoar, cattle } = products;

  const result =
    calculateGrain(grain) +
    calculateVegetables(vegetables) +
    calculateSheep(sheep) +
    calculateWildBoar(wildBoar) +
    calculateCattle(cattle);

  return result;
}
