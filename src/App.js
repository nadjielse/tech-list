import { useState } from "react";

import { Header, List } from "./components";

import './App.css';

function App() {
  const [ techs, setTechs ] = useState([
    {
      id: 0,
      name: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris, paradis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.",
      done: false
    },
    {
      id: 1,
      name: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris, paradis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.",
      done: true
    }
  ]);

  return (
    <main>
      <Header updateTechs={ setTechs } />
      <List techs={ techs } updateTechs={ setTechs } />
    </main>
  );
}

export default App;
