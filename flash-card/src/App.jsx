import { useState } from "react";

const questionsData = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];
function App() {
  return (
    <Flashcards/>
  )
}
function Flashcards(){
  const questions = questionsData;
  
  return  <div className="flashcards">
    {questions.map((question) => {
      return <Question questionObj={question} key={question.id} />  
    })}
    </div>
}
function Question(props) {
  const [selected,setSelected] = useState(false);
  function handleClick() {
    setSelected(e => !e)
  }
  return <div className={selected ? "selected" : ""} onClick={handleClick}>
    {selected ? props.questionObj.answer : props.questionObj.question }
  </div>
}
export default App;