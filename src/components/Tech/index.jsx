import { PiTrashBold } from "react-icons/pi";

import "./style.css";

export function Tech({ id, name, status }) {
  return (
    <li className={ `tech-container ${status ? "done" : ''}` }>
      <div id={ "tech-" + id + "-body" } className="tech-body">
        <input id={ "tech-" + id + "-checkbox" } type="checkbox" checked={ status } />
        <label id={ "tech-" + id + "-label" } htmlFor={ "tech-" + id }>{ name }</label>
      </div>
      <button className="trash"><PiTrashBold /></button>
    </li>
  );
}
