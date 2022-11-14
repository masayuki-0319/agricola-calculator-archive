import { FamilyResource } from '../types';

const FAMILY_COEFFICIENT = {
  room: {
    wood: 0,
    cray: 1,
    stone: 2,
  },
  familyMember: 3,
  beggingCard: -3,
};

export function calcFamily(family: FamilyResource): number {
  const { room, familyMember, beggingCard } = family;

  const roomScore = FAMILY_COEFFICIENT.room[room.type] * room.count;
  const familyMemberScore = FAMILY_COEFFICIENT.familyMember * familyMember;
  const beggingCardScore = FAMILY_COEFFICIENT.beggingCard * beggingCard;

  const result = roomScore + familyMemberScore + beggingCardScore;

  return result;
}
