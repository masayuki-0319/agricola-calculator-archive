import { FamilyResource } from '../../types';
import { validateNumber } from '../../util/validateNumber';

const FAMILY_COEFFICIENT = {
  room: {
    wood: 0,
    cray: 1,
    stone: 2,
  },
  familyMember: 3,
  beggingCard: -3,
};

export function calculateRoom(room: FamilyResource['room']) {
  validateNumber(room.count);

  const result = FAMILY_COEFFICIENT.room[room.type] * room.count;

  return result;
}

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
