import { FamilyResource } from '../../types';
import {
  calculateRoom,
  calculateFamilyMember,
  calculateBeggingCard,
} from '../baseScore/family';

export function calculateFamily(family: FamilyResource): number {
  const { room, familyMember, beggingCard } = family;

  const roomScore = calculateRoom(room);
  const familyMemberScore = calculateFamilyMember(familyMember);
  const beggingCardScore = calculateBeggingCard(beggingCard);

  const result = roomScore + familyMemberScore + beggingCardScore;

  return result;
}
