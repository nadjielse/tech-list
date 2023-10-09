import { Header, List } from "./components";

import './App.css';

function App() {
  return (
    <main>
      <Header updateTechs={ setTechs } />
      <List techs={ techs } updateTechs={ setTechs } />
    </main>
  );
}

export default App;
