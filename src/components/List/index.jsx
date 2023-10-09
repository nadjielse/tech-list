import { ListHeader } from "../ListHeader";
import { Tech } from "../Tech";
import { Warning } from "../Warning";

import "./style.css";

export function List({ techs, updateTechs }) {
  return (
    <section className="list-container">
      <ListHeader techs={techs} />
      {
        techs.length ?
        <ul>
          { techs.map(tech => (
            <Tech
              key={ tech.id }
              id={ tech.id }
              name={ tech.name }
              status={ tech.done }
              updateTechs={ updateTechs }
            />
          )) }
        </ul> :
        <Warning />
      }
    </section>
  );
}
