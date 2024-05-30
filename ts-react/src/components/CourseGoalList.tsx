import CourseGoal from "./courseGoal.tsx";
import { type CourseGoal as typeCGoal } from "../App.tsx";

interface CourseGoalListProps {
    goals: typeCGoal[];
    onDeleteGoal : (id:number) => void
}

export default function CourseGoalList({goals,onDeleteGoal}: CourseGoalListProps) {
    return <ul>
        {goals.map((goal)=>{
            return <li key={goal.id}>
                <CourseGoal id={goal.id} Title = "Learn React + TS" onDelete={onDeleteGoal}>
                    <p>Learn from the ground up</p>
                </CourseGoal>
            </li>
        })}
        </ul>
}