import { ScoreCoefficient, scoreGenerator } from '../../util/scoreCofficient';
import { validateNumber } from '../../util/validateNumber';

type Product = 'grain' | 'vegetables' | 'sheep' | 'wildBoar' | 'cattle';
const GRAIN_SCORE_UNIT = [0, 1, 4, 6, 7];
const VEGITABLES_SCORE_UNIT = [0, 1, 4, 6, 7];
const SHEEP_SCORE_UNIT = [0, 1, 4, 6, 7];
const WILD_BOAR_SCORE_UNIT = [0, 1, 4, 6, 7];
const CATTLE_SCORE_UNIT = [0, 1, 2, 4, 6];

const PRODUCTS_COEFFICIENT: { [P in Product]: ScoreCoefficient } = {
  grain: scoreGenerator(GRAIN_SCORE_UNIT),
  vegetables: scoreGenerator(VEGITABLES_SCORE_UNIT),
  sheep: scoreGenerator(SHEEP_SCORE_UNIT),
  wildBoar: scoreGenerator(WILD_BOAR_SCORE_UNIT),
  cattle: scoreGenerator(CATTLE_SCORE_UNIT),
};

function _calculateProducts(resultCount: number, product: Product) {
  validateNumber(resultCount);
  const coefficient = PRODUCTS_COEFFICIENT[product];

  if (resultCount >= coefficient['score5']['resultCount']) {
    return resultCount * coefficient['score5']['scorePoint'];
  } else if (resultCount >= coefficient['score4']['resultCount']) {
    return resultCount * coefficient['score4']['scorePoint'];
  } else if (resultCount >= coefficient['score3']['resultCount']) {
    return resultCount * coefficient['score3']['scorePoint'];
  } else if (resultCount >= coefficient['score2']['resultCount']) {
    return resultCount * coefficient['score2']['scorePoint'];
  } else if (resultCount === coefficient['score1']['resultCount']) {
    return coefficient['score1']['scorePoint'];
  } else {
    throw new Error();
  }
}

export function calculateGrain(grain: number) {
  const result = _calculateProducts(grain, 'grain');

  return result;
}

export function calculateVegetables(vegetables: number) {
  const result = _calculateProducts(vegetables, 'vegetables');

  return result;
}

export function calculateSheep(sheep: number) {
  const result = _calculateProducts(sheep, 'sheep');

  return result;
}

export function calculateWildBoar(wildBoar: number) {
  const result = _calculateProducts(wildBoar, 'wildBoar');

  return result;
}

export function calculateCattle(cattle: number) {
  const result = _calculateProducts(cattle, 'cattle');

  return result;
}
