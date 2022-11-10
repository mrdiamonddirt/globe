import './App.css';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>
  );
}

export default App;
