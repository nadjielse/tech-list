import { PiTrashBold } from "react-icons/pi";

import "./style.css";

export function Tech({ id, name, status, updateTechs }) {
  const updateStatus = () => {
    updateTechs(techs => {
      return techs.map(tech => {
        if(tech.id == id) {
          tech.done = !status;
        }

        return tech;
      });
    });
  }

  const deleteTech = () => {
    updateTechs(techs => techs.filter(tech => tech.id != id));
  }

  return (
    <li className={ `tech-container ${status ? "done" : ''}` }>
      <div id={ "tech-" + id + "-body" } className="tech-body">
        <input
          id={ "tech-" + id + "-checkbox" }
          type="checkbox"
          checked={ status }
          onChange={ updateStatus }
        />
        <label
          id={ "tech-" + id + "-label" }
          htmlFor={ "tech-" + id }
          onClick={ updateStatus }
        >{ name }</label>
      </div>
      <button
        className="trash"
        onClick={ deleteTech }
      ><PiTrashBold /></button>
    </li>
  );
}
