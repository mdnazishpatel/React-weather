import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  let [wDetail, setwDetails] = useState()
  let getData = (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalres) => {
        if (finalres.cod == '404') {
          setwDetails(undefined)
        } else {
          setwDetails(finalres)
        }

      })
    event.preventDefault()
    setCity('')
  }
useEffect(()=>{
  console.log('hello world')
},[])

  return (
    <div className="App">
      <div className="in">
        <h1>WEATHER APP</h1>
        <form onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city"
          />
          <button className='btn' type="submit">Search</button>
        </form>
      </div>
      <div className="main">
        {wDetail !== undefined
          ? <>
            <h1>{wDetail.name}</h1>
            <h2>{wDetail.main.temp}</h2>
            <p>{wDetail.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/w/${wDetail.weather[0].icon}.png`} />
          </>
          :
          "no data found"
        }
      </div>
    </div>
  );
}

export default App;
