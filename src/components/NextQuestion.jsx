export default function NextQuestion({ dispatch, answer, questions, index }) {
  if (answer === null) return null;
  if (index < questions.length - 1)
    return (
      <button
        className="items-end  bg-blue-700 text-white border border-blue-800 rounded-lg p-3 hover:bg-blue-500"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === questions.length - 1)
    return (
      <button
        className="items-end  bg-blue-700 text-white border border-blue-800 rounded-lg p-3 hover:bg-blue-500"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
