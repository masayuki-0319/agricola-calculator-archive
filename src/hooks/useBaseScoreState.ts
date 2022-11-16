import { useState } from 'react';

export const useBaseScoreState = (
  calculator: Function
): [number, number, Function] => {
  const [input, setInput] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const onUpdate = (count: 1 | -1) => {
    const currentCount = input + count;
    if (currentCount < 0) return;
    setInput(currentCount);

    const currentScore = calculator(currentCount);
    setScore(currentScore);
  };

  return [input, score, onUpdate];
};
