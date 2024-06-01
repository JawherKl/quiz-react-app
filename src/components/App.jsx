import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Loading from "./Loading";
import Error from "./Error";
import Ready from "./Ready";
import Body from "./Body";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import Finish from "./Finish";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "retake":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      throw new Error("Action is unknown");
  }
}
function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="bg-gray-300 w-1/4 mt-10 p-6 text-center mx-auto rounded-lg py-7">
      <Header />
      <Body>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Ready questions={questions} dispatch={dispatch} index={index} />
        )}
        {status === "active" && (
          <>
            <Progress
              questions={questions}
              answer={answer}
              index={index}
              points={points}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <NextQuestion
              dispatch={dispatch}
              answer={answer}
              questions={questions}
              index={index}
            />
          </>
        )}
        {status === "finished" && (
          <Finish questions={questions} points={points} dispatch={dispatch} />
        )}
      </Body>
    </div>
  );
}

export default App;
