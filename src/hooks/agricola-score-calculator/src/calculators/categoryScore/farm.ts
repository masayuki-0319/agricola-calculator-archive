import { FarmResource } from '../../types';
import {
  calculateField,
  calculatePastures,
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateRoom,
} from '../baseScore/farm';

export function calculateFarms(farm: FarmResource): number {
  const { field, pastures, emtpyFamyard, fancedStable, room } = farm;

  const result =
    calculateField(field) +
    calculatePastures(pastures) +
    calculateEmtpyFamyard(emtpyFamyard) +
    calculateFancedStable(fancedStable) +
    calculateRoom(room);

  return result;
}
