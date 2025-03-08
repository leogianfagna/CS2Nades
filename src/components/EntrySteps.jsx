import "./EntrySteps.css";
import { FilterContext } from "../context/FilterContext";
import { useContext } from "react";
import { nades } from "/public/data/nades";

const EntrySteps = () => {
  const { nadeType } = useContext(FilterContext);
  const { nade } = useContext(FilterContext);
  const { step, setStep } = useContext(FilterContext);

  // Checa como parâmetro o ID da nade, que fica dentro do objeto
  const handleStepSelection = (nade) => {
    const nadeEncontrado = nades.find(nade => nade.id === nade);
  }

  // Só vai ser exibido na categoria entry, e também se alguma nade foi selecionada, para não tentar
  // acessar elementos nulos/vazios
  return nadeType === "Entry" && nade ? (
    <div className="row steps" style={{display: "block !important"}}>
    {console.log(nade)}
      {nade.steps.map((nade, i) => (
        <div
          className="col"
          key={i}
          onClick={() => {
            setStep(nade);
            console.log(nade);
          }}
        >
          PASSO {i + 1}
        </div>
      ))}
    </div>
  ) : null;
};

export default EntrySteps;
