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
    <div className='border-2 border-slate-900'>
      <img src="" alt="" />
      <h1 className='text-xl'>Tien Pham</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque expedita iusto sit blanditiis beatae reiciendis illum. Repudiandae praesentium quae ducimus, vel sed, ad dolorem tenetur, vero numquam fugit sapiente?</p>
    </div>
  );
}
export default App
