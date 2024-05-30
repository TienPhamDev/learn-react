export default function CourseGoalList (){
    return <ul>
        {goals.map((goal)=>{
            return <li key={goal.id}>
                <CourseGoal Title = "Learn React + TS">
                    <p>Learn from the ground up</p>
                </CourseGoal>
        </li>
        })}
        </ul>
}