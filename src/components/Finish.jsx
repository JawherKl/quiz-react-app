export default function Finish({ questions, points, dispatch }) {
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎉";
  if (percentage >= 80 && percentage < 100) emoji = "👏";
  if (percentage >= 50 && percentage < 80) emoji = "👍";
  if (percentage > 0 && percentage < 50) emoji = "😟";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <div>
      <p className="bg-blue-700 text-white py-2 px-1 rounded-lg text-bold">
        {emoji} You scored {points} out of {maxPoints} ({Math.ceil(percentage)}
        %)
      </p>
      <br />
      <button
        className="bg-gray-500 text-white p-1 rounded-lg"
        onClick={() => dispatch({ type: "retake" })}
      >
        Retake Test
      </button>
    </div>
  );
}
