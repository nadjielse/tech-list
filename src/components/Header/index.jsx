import { useState } from "react";

import { GrAddCircle } from "react-icons/gr";

import "./style.css";

export function Header({ updateTechs }) {
  const [ inputValue, setInputValue ] = useState("");
  const [ warn, setWarn ] = useState(false);

  const createTech = e => {
    e.preventDefault();

    if(!inputValue) return setWarn(true);
    else setWarn(false);

    updateTechs(techs => {
      return [
        ...techs,
        {
          id: techs.reduce((id, tech) => {
            return tech.id > id ? tech.id : id;
          }, 0) + 1,
          name: inputValue,
          done: false
        }
      ];
    });

    setInputValue("");
  }

  return (
    <header className="header-container">
      <h1 className="title">Minha lista de tecnologias</h1>
      <form className="search-bar">
        <div>
          <label
            id="tech-label"
            htmlFor="tech-input"
          >Adicione uma nova tecnologia</label>
          <input
            id="tech-input"
            type="text"
            value={ inputValue }
            placeholder="Adicione uma nova tecnologia"
            onChange={ e => setInputValue(e.target.value) }
          />
          <button
            id="tech-button"
            onClick={ createTech }
          >Criar <GrAddCircle /></button>
        </div>
        {
          warn ?
          <span className="warning">
            Você deve preencher a tecnologia antes de criá-la
          </span> :
          <></>
        }
      </form>
    </header>
  );
}
