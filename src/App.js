import React from "react"
import Header from "./Header.jsx"
import Details from "./Details.jsx"
import data from "./data.js"

console.log(data);

function App() {
  const detailsElements = data.map((item)=>{
    return <Details 
      item = {item}
    />
  })
  return (
    <div className="mx-auto w-8/12 border rounded-xl ">

<Header />

{detailsElements}

    </div>
  );
}

export default App;
