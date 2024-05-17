import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  return (
    <div className='container mx-auto'>
      <Card />

    </div>
  )
};
function Card(){
  return (
    <div className='border-4 border-slate-900 mt-6 w-1/3'>
      <img src="./public/tien.jpg" alt="avatar" className='w-full h-54'
      />
      <Bio/>
    </div>
  );
}
function Bio(){
  return (
    <div className='p-6'>
      <h1 className='text-3xl'>Tien Pham</h1>
      <p className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque expedita iusto sit blanditiis beatae reiciendis </p>
      <SkillList />
    </div>
  );
}
function SkillList() {
  const data = skills;

  return (
    <ul className='flex flex-wrap gap-2'>
      {data.map((el) => {
        return <Skill skillObj={el} key={el.skill} />
      })}
    </ul>
  );
}
//thumb up &#128077; nerd face &#129299; bicep emojo 	&#128170;
function Skill({ skillObj }) {
  let colors = `bg-[${skillObj.color}]` 
  let style = `p-2 rounded-md ${colors}`;
  return (
    <span className={style}>
      {skillObj.skill} 
    </span>
  );
};
export default App
