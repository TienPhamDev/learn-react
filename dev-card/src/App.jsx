import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
function SkillList(){
  return (
    <div className='flex flex-wrap gap-2'>
        <Skill 
          name = "HTML"
          color = "bg-red-500"
          emoji = "&#129299;"
          />
        <Skill
          name = "JAVASCRIPT"
          color = "bg-yellow-500"
          emoji = "&#128077;"
          />
        <Skill
          name = "REACT"
          color = "bg-sky-500"
          emoji = "&#129299;"
        />
        <Skill
          name = "GITHUB"
          color = "bg-slate-500"
          emoji = "&#129299;"
        />
      </div>
  );
}
//thumb up &#128077; nerd face &#129299;
function Skill(props){
  let style = `p-2 rounded-md ${props.color}`;
  return (
    <span className={style}>
      {props.name} {props.emoji}
    </span>
  );
};
export default App
