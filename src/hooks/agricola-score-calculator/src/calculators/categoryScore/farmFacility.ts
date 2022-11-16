import { FarmResource } from '../../types';
import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateRoom,
} from '../baseScore/farmFacility';

export function calculateFarmFacility(farm: FarmResource): number {
  const { field, pastures, emtpyFamyard, fancedStable, room } = farm;

  const result =
    calculateField(field) +
    calculatePastures(pastures) +
    calculateEmtpyFamyard(emtpyFamyard) +
    calculateFancedStable(fancedStable) +
    calculateRoom(room);

  return result;
}
