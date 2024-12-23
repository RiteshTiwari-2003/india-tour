import React,{useState} from "react";
import data from "./data";
import Tours from "./components/Tours"

const App = () => {
  const [tours,setTours]=useState(data);
  function removeTour(id){
    // eslint-disable-next-line no-unused-expressions
    const newTour=tours.filter((tour)=>{tour.id!==id});
    setTours(newTour);

  }
  if (tours.length===0){
    return (<div className="refresh">
      <h1>No Tours left.</h1>
      <button onClick={()=>setTours(data)}>Refresh</button>
    </div>);
  }
  return <div>
  <Tours tours={tours} removeTours={removeTour}></Tours></div>;//we makes then a custome component sfter heading name as Tours
};

export default App;
// for running this project first go on terminal and run mpm i or npm install for installing all nam packages and node module and package.json whihc is basically meta data of your project in which all basic information present about project
// after this for running the program run the npm start