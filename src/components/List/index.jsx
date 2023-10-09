import { ListHeader } from "../ListHeader";
import { Tech } from "../Tech";

import "./style.css";

export function List({ techs }) {
  return (
    <section className="list-container">
      <ListHeader techs={techs} />
      {
        techs.length ?
        <ul>
          { techs.map(tech => (
            <Tech
              id={ tech.id }
              name={ tech.name }
              status={ tech.done }
            />
          )) }
        </ul> :
        <div>
          <h3>Você ainda não tem tecnologias cadastradas</h3>
          <p>Crie tecnologia e organize seus itens a fazer</p>
        </div>
      }
    </section>
  );
}
