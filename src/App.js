import { useState } from "react";
import { useEffect } from "react";

import Preview from "./components/Preview";
import Forecast from "./components/Forecast";
import Wind from "./components/Wind";
import Humidity from "./components/Humidity";
import Visibility from "./components/Visibility";
import AirPressure from "./components/AirPressure";

function App() {

  const [location,setLocation] = useState()
  const [data, setData] = useState()
  const [grade,setGrade] = useState(1)

  useEffect(()=>{
      fetch("https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=Venice")
        .then((response)=>response.json())
        .then((response)=>setLocation(response[0].woeid))
  },[])

  useEffect(()=>{
    fetch(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${location}/`)
      .then((response)=>response.json())
      .then((response)=>{setData(response); console.log(response)})
  },[location])


  function changeLocation(e) {
    e.preventDefault()
    const form = document.querySelector('form')
    let city = form.city.value

    fetch(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${city}`)
    .then((response)=>response.json())
    .then((response)=>{setLocation(response[0].woeid); form.reset()})
  }

  function changeGrade(e) {
    if(e.target.classList[1]=="tempF") {
      setGrade(-1)
      const button = document.querySelector(".tempF")
      button.classList.add("active")
      const button2 = document.querySelector(".tempC")
      button2.classList.remove("active")
    }
    else if(e.target.classList[1]=="tempC") {
      setGrade(1)
      const button = document.querySelector(".tempC")
      button.classList.add("active")
      const button2 = document.querySelector(".tempF")
      button2.classList.remove("active")
    }
    
    
  }

  // changeLocation("milan")


  return (
    
      <div className="container">

        <div className="preview">
          <form onSubmit={(e)=>{changeLocation(e)}}>
            <input type="city" name="city" className="city" id="city" placeholder="Set location"/>
            <button>GO</button>
          </form>
          {(data)? <Preview data={data} grade={grade}></Preview> : null}
        </div>

        <div className="right">
          {(data)? <Forecast data={data} grade={grade}></Forecast> : null}
          <div className="highlights">
            <h3>Today's Hightlights</h3>
            <div className="highlights-container">
              {(data)? <Wind data={data}></Wind> : null}
              {(data)? <Humidity data={data}></Humidity> : null}
              {(data)? <Visibility data={data}></Visibility> : null}
              {(data)? <AirPressure data={data}></AirPressure> : null}
            </div>
          </div>
          <button className="temp tempC active" onClick={changeGrade}>°C</button>
          <button className="temp tempF" onClick={changeGrade}>F</button>
        </div>
      </div>

  );
}

export default App;




let headers = new Headers({
  "Accept"       : "application/json",
  "Content-Type" : "application/json",
  "User-Agent"   : "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:97.0) Gecko/20100101 Firefox/97.0"
});
