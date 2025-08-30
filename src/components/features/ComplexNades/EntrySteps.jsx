import "./EntrySteps.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";

const EntrySteps = () => {
  const { filter, nade, step, setStep } = useContext(FilterContext);

  // Só vai ser exibido na categoria entry, e também se alguma nade foi selecionada, para não tentar
  // acessar elementos nulos/vazios
  return filter.type === "Entry" && nade ? (
    <div className="row steps" style={{ marginTop: "1rem" }}>
      {nade.steps.map((nade, i) => (
        <div
          className={`col ${step === nade ? "selected" : ""}`}
          key={i}
          onClick={() => {
            setStep(nade);
          }}
        >        
          NADE {i + 1}
        </div>
      ))}
    </div>
  ) : null;
};

export default EntrySteps;
