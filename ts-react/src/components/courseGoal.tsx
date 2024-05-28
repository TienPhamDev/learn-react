import { type ReactNode } from "react";

interface CourseGoaldProps {
    Title : string;
    children: ReactNode
}

export default function CourseGoal({Title, children }: CourseGoaldProps){
    return (<article>
        <div>
            <h2>{Title}</h2>
            {children}
        </div>
        <button>Delete</button>
    </article>)
    ;
}