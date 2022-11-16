import React from 'react';
import { calculateFamilyMember } from '../hooks/agricola-score-calculator/src';

export const Home: React.FC = () => {
  const [familyMember, setFamilyMember] = React.useState<number>(2);
  const [familyMemberScore, setFamilyMemberScore] = React.useState<number>(6);

  const onUpdateFamilyMember = (count: 1 | -1) => {
    const currentMember = familyMember + count;
    if (currentMember < 0) return;
    setFamilyMember(currentMember);

    const currentScore = calculateFamilyMember(currentMember);
    setFamilyMemberScore(currentScore);
  };

  return (
    <>
      <h1>アグリコラ結果計算ツール</h1>
      <h2>家族の数</h2>
      <button onClick={() => onUpdateFamilyMember(-1)}>-1</button>
      <button onClick={() => onUpdateFamilyMember(1)}>+1</button>
      <p>Input: {familyMember}</p>
      <p>Result score: {familyMemberScore}</p>
    </>
  );
};
