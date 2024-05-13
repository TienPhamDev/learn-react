import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import './tailwindcss.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App(){
    return  <div className="container">
                <Header/>
                <Menu />
                <Footer />
            </div>;
};
function Header(){
    const styles = {color:"red",fontSize:"48px",textTransform:"uppercase"}
    return  <header className="header">
                <h1>Fast React Pizza Co.</h1>
            </header>
}
function Menu(){
    return  <main className="menu">
                <h2>Our Menu</h2>
                <Pizza 
                    name="Pizza Spinaci" 
                    ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                    photoName = "pizzas/spinaci.jpg"
                    price ={10}
                />
                
            </main>;
}
function Footer(){
    const hour = new Date().getHours;
    const openHours = 12;
    const closeHours = 22;
    const isOpen = hour >= openHours && hour <= closeHours;
    
    // if(hour >= openHours && hour <= closeHours ) alert("We're currently open");
    // else alert("We're currently close");
    
    return <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open.</footer>
}
function Pizza(props){
    return (<div className="pizza">
                <img src={props.photoName} alt={props.name} />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.ingredients}</p>
                    <span>{props.price + 3}</span>
                </div>
            </div>);
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);