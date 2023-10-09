import { useState } from "react";

import { Header, List } from "./components";

import './App.css';

function App() {
  const [ techs, setTechs ] = useState([]);

  return (
    <main>
      <Header updateTechs={ setTechs } />
      <List techs={ techs } updateTechs={ setTechs } />
    </main>
  );
}

export default App;
