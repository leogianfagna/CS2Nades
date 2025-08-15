import "./EntrySteps.css";
import { FilterContext } from "/src/context/FilterContext";
import { useContext } from "react";

const EntrySteps = () => {
  const { nadeType } = useContext(FilterContext);
  const { nade } = useContext(FilterContext);
  const { step, setStep } = useContext(FilterContext);

  // Só vai ser exibido na categoria entry, e também se alguma nade foi selecionada, para não tentar
  // acessar elementos nulos/vazios
  return nadeType === "Entry" && nade ? (
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
