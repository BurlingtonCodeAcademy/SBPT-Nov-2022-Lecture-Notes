import './App.css';
import Presidents from './components/presidents/Presidents';

/* 
- Create a boiler plates for all three components
  - Return "fragments" 
  - Set each Component with an <h2> that states "Hello from [COMPONENT]"
- Import/Mount each component as to how they should be in regarding parent/child relationship
*/

function App() {
  return (
    <div className="App">
      <h1>List of Presidents</h1>
      <Presidents />
    </div>
  );
}

export default App;
