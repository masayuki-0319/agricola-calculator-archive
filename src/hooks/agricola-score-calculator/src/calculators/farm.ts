import { FarmResource } from '../types';
import { ScoreCoefficient, scoreGenerator } from '../util/scoreCofficient';

function calcField(field: number) {
  const result = calcFarm(field, 'field');
  return result;
}

function calcPastures(pastures: number) {
  const result = calcFarm(pastures, 'pastures');
  return result;
}

function calcEmtpyFamyard(emtpyFamyard: number) {
  const result = emtpyFamyard * -1;
  return result;
}

function calcFancedStable(fancedStable: number) {
  const result = fancedStable * 1;
  return result;
}

type Farm = 'field' | 'pastures';
const FIELD_UNIT = [1, 2, 3, 4, 5];
const PASTURES_UNIT = [0, 1, 2, 3, 4];

const FARM_COEFFICIENT: { [P in Farm]: ScoreCoefficient } = {
  field: scoreGenerator(FIELD_UNIT),
  pastures: scoreGenerator(PASTURES_UNIT),
};

function calcFarm(resultCount: number, farm: Farm) {
  const coefficient = FARM_COEFFICIENT[farm];

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
    throw new Error('負の数は入力不可です');
  }
}

export function calcFarms(farm: FarmResource): number {
  const { field, pastures, emtpyFamyard, fancedStable } = farm;

  const result =
    calcField(field) +
    calcPastures(pastures) +
    calcEmtpyFamyard(emtpyFamyard) +
    calcFancedStable(fancedStable);

  return result;
}
