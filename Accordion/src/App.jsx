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
      return <AccordionItem num={i} title={el.title} text={el.text} />
    })}
  </div>;
}
function AccordionItem({ num, title,text }) {
  return <div className="item">
    <span className="num">{num}</span>
    <span className="title">{title}</span>
    <span className="icon">-</span>
    <div className="content-box">{text}</div>
  </div>
}