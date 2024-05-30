import imgGoal from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";


export type CourseGoal = {
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
      return [...prevGoals,newGoals]
    })
  }
  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id !== id ))
  }
  return <main>
    <Header image = {{src : imgGoal,alt :"A list of goals"}}>
      <h1>Your Course Goals</h1>
    </Header>
    <NewGoal />
    <CourseGoalList goals ={goals} onDeleteGoal={handleDeleteGoal} />
    
  </main>;
}
