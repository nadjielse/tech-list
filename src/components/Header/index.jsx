import { GrAddCircle } from "react-icons/gr";

import "./style.css";

export function Header() {
  return (
    <header className="header-container">
      <h1 className="title">Minha lista de tecnologias</h1>
      <form className="search-bar">
        <label id="tech-label" htmlFor="tech-input">Adicione uma nova tecnologia</label>
        <input id="tech-input" type="text" placeholder="Adicione uma nova tecnologia" />
        <button id="tech-button" type="submit">Criar <GrAddCircle /></button>
      </form>
    </header>
  );
}
