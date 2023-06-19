import { useEffect, useState } from "react";
import { allCities, searchCities } from "./cities";



export const App = () => {
  const [busqueda, setBusqueda] = useState('');
  const [cities, setCities] = useState([]);

  const init = async () => {
    setCities(await searchCities(busqueda));
    console.log(cities);
  };

  const allCity = async () =>{
    setCities(await allCities());
  };

  useEffect(() => {
    busqueda != "" ? init() : allCity();
  }, [busqueda]);
  
  return (
    <>
      <div className="container">
        <h1>Search</h1>
        <input 
          value={busqueda} 
          onChange={({target})=>setBusqueda(target.value)}
        /> 
      <hr />
      {cities[0] &&
        cities.map((c) =>{
          <li>{c.name.common}</li>
          return (
            <>
              <li>{c.name.official}</li>
              <h3 key={c.name.common}>
                {" "}
                {c.name.official} {c.fifa && "- (" + c.fifa + ")"}
              </h3>
              <h6>({c.continents[0]})</h6>
              <img
                  src={c.flags.png}
                  alt={c.flags.alt}
                  width={100}
                  height={50}
              />
              <br />
              <a href={c.maps.googleMaps} target="_blank" rel="noreferrer">
                Ubicación
              </a>
            </>
          )
        })}
      </div>
    </>
  );
};

