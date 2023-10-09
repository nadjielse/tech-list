import { Header, List } from "./components";

import './App.css';

const techs = [
  {
    id: 0,
    name: "Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris, paradis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.",
    done: false
  }
];

function App() {
  return (
    <main>
      <Header />
      <List techs={ techs } />
    </main>
  );
}

export default App;
