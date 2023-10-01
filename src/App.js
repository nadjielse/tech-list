import { GrAddCircle } from "react-icons/gr";
import { PiTrashBold } from "react-icons/pi";

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
      <header>
        <h1>Minha lista de tecnologias</h1>
        <form>
          <label htmlFor="tech-input">Adicione uma nova tecnologia</label>
          <input id="tech-input" type="text" placeholder="Adicione uma nova tecnologia" />
          <button type="submit">Criar <GrAddCircle /></button>
        </form>
      </header>

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