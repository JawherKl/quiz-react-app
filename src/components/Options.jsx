export default function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`border border-blue-500 p-2 w-full m-1 rounded-lg text-left cursor-pointer pl-2 transition:1.5s ease-in-out hover:ml-3
        ${index === answer ? "ml-4 bg-blue-700" : ""} 
        ${
          hasAnswered
            ? index === question.correctOption
              ? "bg-green-500"
              : "bg-orange-500"
            : ""
        }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
