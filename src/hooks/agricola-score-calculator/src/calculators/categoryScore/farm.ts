import { FarmResource } from '../../types';
import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
} from '../baseScore/farm';

export function calculateFarms(farm: FarmResource): number {
  const { field, pastures, emtpyFamyard, fancedStable } = farm;

  const result =
    calculateField(field) +
    calculatePastures(pastures) +
    calculateEmtpyFamyard(emtpyFamyard) +
    calculateFancedStable(fancedStable);

  return result;
}
