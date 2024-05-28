import CourseGoal from "./components/courseGoal.tsx";
import imgGoal from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";


type CourseGoal = {
  title: string;
  description: string;
  id: number
}
export default function App() {
  const [goals,setGoals]=useState<CourseGoal[]>([])
  function handleAddGoal(){
    
    setGoals(prevGoals => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TypeScript",
        description:"Learn it indepth"
      }
      return [...prevGoals,new]
    })
  }
  return <main>
    <Header image = {{src : imgGoal,alt :"A list of goals"}}>
      <h1>Your Course Goals</h1>
    </Header>
    <button>Add Goals</button>
    <CourseGoal
      Title = "Learn React + TS"
    >
      <p>Learn from the ground up</p>
    </CourseGoal>
    
  </main>;
}
