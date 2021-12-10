import React from "react"; // add to every file with component
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";


function App() {
  return (
    <div className="App">
        <Counter/>
      <ClassCounter />
     </div>
  );
}

export default App;
