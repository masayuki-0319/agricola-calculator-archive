import type { FamilyResource } from '../../types';
import { validateNumber } from '../util/validateNumber';

const FAMILY_COEFFICIENT = {
  familyMember: 3,
  beggingCard: -3,
};

export function calculateFamilyMember(
  familyMember: FamilyResource['familyMember']
) {
  validateNumber(familyMember);

  const result = FAMILY_COEFFICIENT.familyMember * familyMember;

  return result;
}

export function calculateBeggingCard(
  beggingCard: FamilyResource['beggingCard']
) {
  validateNumber(beggingCard);

  const result = FAMILY_COEFFICIENT.beggingCard * beggingCard;

  return result;
}
