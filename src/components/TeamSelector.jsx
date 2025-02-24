/* eslint-disable react/prop-types */
import "./TeamSelector.css";

const TeamSelector = ({ handleTeamSelector, team, map }) => {
  return map ? (
    <section className="container">
      <div className="text-center">
        <h2 className="news-title mb-0">Escolha o time</h2>
        <p className="news-description">Qual lado estamos jogando?</p>
      </div>
      <div className="container text-center">
        <div className="row agents-image">
          <div className="col">
            <img
              src="images/ct_agent.png"
              className={`${team === "tr" ? "agents-image-gray" : ""}`}
              onClick={() => {
                handleTeamSelector("ct");
                setTimeout(function() {
                  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                }, 10)
              }}
            ></img>
          </div>
          <div className="col">
            <img
              src="images/tr_agent.png"
              className={`${team === "ct" ? "agents-image-gray" : ""}`}
              onClick={() => {
                handleTeamSelector("tr");
                setTimeout(function() {
                  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                }, 10)
              }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default TeamSelector;
