import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='container mx-auto w-1/2'>
      <Card />

    </div>
  )
};
function Card(){
  return (
    <div className='border-4 border-slate-900 mt-8'>
      <img src="" alt="" />
      <Bio/>
    </div>
  );
}
function Bio(){
  return (
    <div className='p-8'>
      <h1 className='text-xl'>Tien Pham</h1>
      <p className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque expedita iusto sit blanditiis beatae reiciendis illum. Repudiandae praesentium quae ducimus, vel sed, ad dolorem tenetur, vero numquam fugit sapiente?</p>
      <div className='flex gap-2'>
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
