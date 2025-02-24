import { useState } from "react";
import "./TeamSelector.css";

const TeamSelector = () => {
  const [activeTeam, setTeam] = useState(null);
  const handleSetTeam = (team) => {
    setTeam(team);
  };

  return (
    <section className="container px-4" style={{ marginTop: "3rem" }}>
      <div className="text-center mb-5">
        <h2 className="news-title mb-0">Escolha o time</h2>
        <p className="news-description">Qual lado estamos jogando?</p>
      </div>
      <div className="container text-center">
        <div className="row agents-image">
          <div className="col">
            <img
              src="images/ct_agent.png"
              className={`${activeTeam === "tr" ? "agents-image-gray" : ""}`}
              onClick={() => {
                handleSetTeam("ct");
              }}
            ></img>
          </div>
          <div className="col">
            <img
              src="images/tr_agent.png"
              className={`${activeTeam === "ct" ? "agents-image-gray" : ""}`}
              onClick={() => {
                handleSetTeam("tr");
              }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSelector;
