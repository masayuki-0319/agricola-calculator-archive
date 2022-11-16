import React from 'react';

import { InputBaseScore } from '../components/InputBaseScore';
import { calculateFamilyMember } from '../hooks/agricola-score-calculator/src';
import { useBaseScoreState } from '../hooks/useBaseScoreState';

export const Home: React.FC = () => {
  const [familyMemberInput, familyMemberScore, onUpdateFamilyMember] =
    useBaseScoreState(calculateFamilyMember);

  return (
    <>
      <h1>アグリコラ結果計算ツール</h1>
      <InputBaseScore
        scoreTitle={'家族の数'}
        input={familyMemberInput}
        score={familyMemberScore}
        onUpdateScore={onUpdateFamilyMember}
      />
    </>
  );
};
