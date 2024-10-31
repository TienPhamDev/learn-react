import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
new Values('#f15025').all(10);
const App = () => {
  return <main>
    <Form/>
    <ColorList/>
  </main>;
};
export default App;
