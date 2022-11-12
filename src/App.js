import './App.css';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import useEffect from 'react';

// create a use effect to get data from https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10 and console.log it
function App() {
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <ComposableMap>
      <Geographies geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} style={{default: { fill: "#CFD8DC" }}}/>
          ))
        }
      </Geographies>
      <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
    </div>
  );
}

export default App;
