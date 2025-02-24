import "./TeamSelector.css";

const TeamSelector = () => {
  return (
    <section className="container px-4" style={{ marginTop: "3rem" }}>
      <div className="text-center mb-5">
        <h2 className="news-title mb-0">Escolha o time</h2>
        <p className="news-description">Qual lado estamos jogando?</p>
      </div>
      <div className="container text-center">
        <div className="row agents-image">
          <div className="col">
            <img src="images/ct_agent.png"></img>
          </div>
          <div className="col">
            <img src="images/tr_agent.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSelector;
