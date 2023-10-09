import { useState } from "react";

import { Header, List } from "./components";

import './App.css';

function App() {
  const [ techs, setTechs ] = useState([
    {
      id: 0,
      name: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris, paradis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.",
      done: false
    }
  ]);

  return (
    <main>
      <Header />
      <List techs={ techs } updateTechs={ setTechs } />
    </main>
  );
}

export default App;
