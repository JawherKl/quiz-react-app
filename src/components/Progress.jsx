export default function Progress({ questions, answer, index, points }) {
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  return (
    <>
      <header>
        <progress
          max={questions.length}
          value={index + Number(answer !== null)}
          className="w-full rounded-lg"
        />
      </header>
      <div className="flex justify-between gap-5">
        <strong>
          Question {index + 1}/{questions.length}
        </strong>
        <strong>
          {points}/{maxPoints} points
        </strong>
      </div>
    </>
  );
}
