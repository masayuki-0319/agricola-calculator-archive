import { FamilyResource } from '../../types';
import {
  calculateFamilyMember,
  calculateBeggingCard,
} from '../baseScore/family';

export function calculateFamily(family: FamilyResource): number {
  const { familyMember, beggingCard } = family;

  const familyMemberScore = calculateFamilyMember(familyMember);
  const beggingCardScore = calculateBeggingCard(beggingCard);

  const result = familyMemberScore + beggingCardScore;

  return result;
}
