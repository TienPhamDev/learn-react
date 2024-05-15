import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
    const pizzas = pizzaData;
  //  const pizzas = [];
    const numPizzas = pizzas.length;
    return  <main className="menu">
              <h2>Our Menu</h2>
            { pizzas > 0 ? <ul className="pizzas w-3/4">
                        {pizzas.map((pizza) => {
                        return <Pizza pizzaObj = {pizza} key={pizza.name}/>})}
                        </ul> : <p>We're still working on the menu. Please come back later.</p>
            }
              {/* <Pizza 
                  name="Pizza Spinaci" 
                  ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                  photoName = "pizzas/spinaci.jpg"
                  price ={3}
              /> */}
              
            </main>;
}
function Footer(){
    const hour = new Date().getHours();
    const openHours = 12;
    const closeHours = 21;
    const isOpen = hour >= openHours && hour <= closeHours;
    
    // if(hour >= openHours && hour <= closeHours ) alert("We're currently open");
    // else alert("We're currently close");
    
    return  <footer className="footer">
              {isOpen ? <p>We're open until {closeHours}:00. Come visit us or order online.</p> : <p>We're welcome you back between {openHours}:00 - {closeHours}:00</p>}
            </footer>
}
function Pizza(props){
    return (<li className="pizza">
                <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
                <div>
                    <h3>{props.pizzaObj.name}</h3>
                    <p>{props.pizzaObj.ingredients}</p>
                    <span>{props.pizzaObj.price + 3}</span>
                </div>
            </li>);
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);