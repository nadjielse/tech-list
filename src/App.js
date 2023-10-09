import { Header, ListHeader, Tech } from "./components";

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
      <section>
        <ListHeader techs={techs} />
        <ul>
          { techs.map(tech => (
            <Tech id={ tech.id } name={ tech.name } status={ tech.done } />
          )) }
        </ul>
      </section>
    </main>
  );
}

export default App;
