export default function Ready({ questions, dispatch }) {
  return (
    <>
      <p>{questions.length} questions to test your React Mastery</p>
      <button
        className="bg-blue-400 py-1 px-4 rounded-lg transition hover:opacity-100 hover:text-white 1s ease-in-out mt-2"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </>
  );
}
