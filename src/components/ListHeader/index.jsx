import "./style.css";

export function ListHeader({ techs }) {
  const totalTechs = techs.length;
  const totalDoneTechs = techs.filter( tech => tech.done ).length;
  
  return (
    <div className="listheader-container">
      <h2 className="listheader-title">
        Tecnologias criadas <span className="listheader-counter">{ totalTechs }</span>
      </h2>
      <h2 className="listheader-title listheader-done">
        Concluídas <span className="listheader-counter">{ `${totalDoneTechs} de ${ totalTechs }` }</span>
      </h2>
    </div>
  );
}
