import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const aboutButton = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  const timeToVisitButton = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  const attractionsButton = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  const firstRender = first ? "d-block p-3" : "d-none";
  const secondRender = second ? "d-block p-3" : "d-none";
  const thirdRender = third ? "d-block p-3" : "d-none";

  const firstTab = first ? "p-3 button selected-button" : "p-3 button";
  const secondTab = second ? "p-3 button selected-button" : "p-3 button";
  const thirdTab = third ? "p-3 button selected-button" : "p-3 button";

  return (
    <div className="bg-container pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1 className="heading">Varanasi</h1>
            <p className="description">
              The city is very commonly referred to as City of Temples, Holy
              City of India, Religious Capital of India, and City of Learning.
            </p>
          </div>
          <div className="col-12 col-lg-5 mb-4">
            <img
              alt="img1"
              className="w-100"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tabs-varanasi-img.png"
            />
          </div>
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-row justify-content-between">
              <button
                id="aboutButton"
                className={firstTab}
                onClick={aboutButton}
              >
                About
              </button>
              <button
                id="timeToVisitButton"
                className={secondTab}
                onClick={timeToVisitButton}
              >
                Time to visit
              </button>
              <button
                id="attractionsButton"
                className={thirdTab}
                onClick={attractionsButton}
              >
                Attractions
              </button>
            </div>
            <div className="tabs-container">
              <div id="aboutTab" className={firstRender}>
                <p className="tab-content">
                  Varanasi is one of the oldest living cities in the world. Its
                  Prominence in Hindu mythology is virtually unrevealed. Mark
                  Twain, the English author and literature, who was enthralled
                  by the legend and sanctity of Benaras, once wrote, ''Benaras
                  is older than history, older than tradition, older even than
                  legend and looks twice as old as all of them put together".
                </p>
              </div>
              <div id="timeToVisitTab" className={secondRender}>
                <p className="tab-content">
                  October to March is the best time to visit Varanasi because
                  most of the fairs here are held during this time of the year.
                  Festivities begin with Diwali and continue to Dev Diwali
                  celebrated on the 15th day from Diwali. In between, there is
                  also Annakut. During this time, the ghats are lit with lights
                  and diyas. Earthen lamps adorn the staircase of the ghats and
                  are also afloat in the river. Firecrackers burn through the
                  night, and it's a sight no one should miss.
                </p>
              </div>
              <div id="attractionsTab" className={thirdRender}>
                <p className="tab-content">
                  When visiting Varanasi, one comes across plenty of ghats, but
                  among them, Dashashwamedh Ghat is said to be one of the oldest
                  and most important. This ghat, leading to the Ganges, is
                  located close to the famous old Vishwanath temple in Kashi
                  (today’s Banaras). Another famous attraction is River Ganges
                  which is the holiest river by the Hindus and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
