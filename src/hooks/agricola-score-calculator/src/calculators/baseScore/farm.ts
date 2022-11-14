import { ScoreCoefficient, scoreGenerator } from '../../util/scoreCofficient';
import { validateNumber } from '../../util/validateNumber';

export function calculateField(field: number) {
  const result = calculateFarm(field, 'field');

  return result;
}

export function calculatePastures(pastures: number) {
  const result = calculateFarm(pastures, 'pastures');

  return result;
}

export function calculateEmtpyFamyard(emtpyFamyard: number) {
  validateNumber(emtpyFamyard);

  const result = emtpyFamyard * -1;

  return result;
}

export function calculateFancedStable(fancedStable: number) {
  validateNumber(fancedStable);

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

function calculateFarm(resultCount: number, farm: Farm) {
  validateNumber(resultCount);
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