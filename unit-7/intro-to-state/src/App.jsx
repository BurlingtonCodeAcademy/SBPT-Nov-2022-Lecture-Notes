import './App.css';
import { useState } from 'react';
import Nav from './components/nav/Nav';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';
import AddUser from './components/add-user/AddUser';

function App() {

  // const name = "Sam";
  const [ names, setNames ] = useState([]);


  const displayWelcome = () => {
    return(
      names.map((name, index) => {
          return(
            <Welcome
              key={index}
              name={name}
              names={names}
              setNames={setNames}
              />
          )
      })
    )
  }

  const iCount = () => {
    // console.log("runs every time!");
    console.log("runs Once");
    return 0;
  }

  const [ count, setCount ] = useState(iCount);

  // const displayCounter = () => {
  //   return(
  //     <Counter count={count} setCount={setCount} />
  //     )
  //   }
    
    return (
      <div className="App">
      <Nav />
      <AddUser
        names={names}
        setNames={setNames}
        />
      {names.length > 0 ? 
        displayWelcome() : 
        <h1 style={{textAlign: "center"}}>Add a User</h1>}
      {/* {displayCounter()} */}
      <Counter count={count} setCount={setCount} />
      
    </div>
  );
}

export default App;

