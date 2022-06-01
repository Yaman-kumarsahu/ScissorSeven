import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="masthead">
      <div className="container">
        <div className="row g-4">
          <img
            className="titleImg"
            src="https://wallpapercave.com/wp/wp6392839.jpg"
          ></img>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://images.justwatch.com/poster/165558719/s718/killer-seven.%7Bformat%7D"
                className="card-img-top"
                alt="Season 1"
              />
              <div className="card-body">
                <h5 className="card-title">Season 1</h5>
                <p className="card-text">
                  Seven is an amnesiac young man who becomes an assassin in
                  order to make enough money to travel to Stan, a
                  technologically advanced country that can help bring back his
                  memories. As the show progresses, Seven learns about his past
                  connections to the Killer League, an organization of Xuanwu.
                </p>
                <a href="Season-1" className="btn btn-primary stretched-link">
                  Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://images.justwatch.com/poster/188135062/s592/season-2"
                className="card-img-top"
                alt="Season 2"
              />
              <div className="card-body">
                <h5 className="card-title">Season 2</h5>
                <p className="card-text">
                  After the aborted Stan invasion on Chicken Island, assassins
                  from the Killers League start targetting Seven and other
                  strong martial artists on the Island to invade it.
                  Furthermore, Thirteen's master is personally interested in
                  killing Seven.
                </p>
                <a href="Season-2" className="btn btn-primary stretched-link">
                  Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://otakukart.com/wp-content/uploads/2021/03/scissor-seven.jpg"
                className="card-img-top"
                alt="Season 3"
              />
              <div className="card-body">
                <h5 className="card-title">Season 3</h5>
                <p className="card-text">
                  In order to protect the residents of Chicken Island and the
                  peaceful life here, Seven and his partners Dai Bo and Xiao Fei
                  embark on an adventure to Xuanwu to find the truth about his
                  past and a way to save the island.
                </p>
                <a href="Season-3" className="btn btn-primary stretched-link">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
