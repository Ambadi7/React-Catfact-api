import axios from "axios";
import { useState,useEffect } from "react";

function App() {
  const [catfact,setCatFact]=useState("")
  const fetchData = async () =>{
    const {data} = await axios.get("https://catfact.ninja/fact")
    console.log(data.fact) 
    setCatFact(data.fact)
  }
  useEffect (()=>{
    fetchData()
  },[])
  return (
    <div className="flex flex-col items-center justify-center bg-green-200 App w-full h-svh text-xl font-mono">
      <div className="flex bg-cyan-500 w-4/6  h-12 justify-center rounded  items-center">
          <button onClick={fetchData} id="btn">Generate Cat Fact</button>
      </div>
      
      <h1 className="">Cat Fact is here !</h1>
      <h1 className=" w-4/6 bg-cyan-500 px-6 rounded ">{catfact}</h1>
      
      
    </div>
  );
}

export default App;
