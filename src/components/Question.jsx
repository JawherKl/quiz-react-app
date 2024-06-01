import Options from "./Options";
export default function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <>
      <h1 className="font-bold text-lg mt-2">{question.question}</h1>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </>
  );
}
