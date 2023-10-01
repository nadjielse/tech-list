import { PiTrashBold } from "react-icons/pi";

import { Header } from "./components";

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
        <div>
          <h2>Tecnologias criadas <span>{ 5 }</span></h2>
          <h2>Concluídas <span>{ 2 } de { 5 }</span></h2>
        </div>
        <ul>
          { techs.map(tech => (
            <li key={ tech.id }>
              <div>
                <input id={ "tech-" + tech.id } type="checkbox" checked={ tech.done } />
                <label htmlFor={ "tech-" + tech.id }>{ tech.name }</label>
              </div>
              <button>Remover <PiTrashBold /></button>
            </li>
          )) }
        </ul>
      </section>
    </main>
  );
}

export default App;