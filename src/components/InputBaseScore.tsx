type InputBaseScoreProps = {
  scoreTitle: string;
  input: any;
  score: number;
  onUpdateScore: Function;
};

export const InputBaseScore: React.FC<InputBaseScoreProps> = (props) => {
  const { scoreTitle, input, score, onUpdateScore } = props;

  return (
    <>
      <h2>{scoreTitle}</h2>
      <button onClick={() => onUpdateScore(-1)}>-1</button>
      <button onClick={() => onUpdateScore(1)}>+1</button>
      <p>Input: {input}</p>
      <p>Result score: {score}</p>
    </>
  );
};
