import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

function Accordion({data}) {
  return <div className="accordion">
    {data.map((el,i) => {
      return <AccordionItem key={i} num={i} title={el.title} text={el.text} />
    })}
  </div>;
}
function AccordionItem({ num, title,text }) {
  const [isOpen,setIsOpen] = useState(false);
  function handleClickItem(){
    setIsOpen(() => {
      return !isOpen ? true : false
    })
  }
  return <div onClick={handleClickItem} className={isOpen ? "open item" : "item"}>
    <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
    <span className="title">{title}</span>
    <span className="icon">{isOpen ? "+" : "-"}</span>
    {isOpen && <div className="content-box">{text}</div>}
  </div>
}