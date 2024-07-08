import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StarRating from './StarRating'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} messages = {["Terrible","Bad","Okay","Good","Amazing"]}/>
    <StarRating maxRating={5} color='red' size={24} defaultRating={3}/> */}
    <App />
  </React.StrictMode>
)
