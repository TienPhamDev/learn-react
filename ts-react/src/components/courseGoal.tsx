import { type ReactNode } from "react";

interface CourseGoaldProps {
    Title : string;
    children: ReactNode;
    id: number;
    onDelete : (id:number) => void
}

export default function CourseGoal({Title, children,id, onDelete }: CourseGoaldProps){
    return (<article>
        <div>
            <h2>{Title}</h2>
            {children}
        </div>
        <button onClick={()=> onDelete(id)}>Delete</button>
    </article>)
    ;
}