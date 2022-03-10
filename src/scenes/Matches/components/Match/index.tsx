import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import { Col } from "antd";

import PremierLeague from "../../../../assets/images/Premier-League.png";

type Props = {};

function Match(props: Props) {
  return (
    <Col xs={24} md={24} xl={24} xxl={12}>
      <div className="match">
        <Link to="/matches/abc" className="match__link" />
        <div className="match__league">
          <i className="match__league--icon">
            <img src={PremierLeague} alt="logo" />
          </i>
          UEFA Europa Conference League
        </div>
        <div className="match__team match__team--home">
          <div className="match__team--logo">
            <img
              loading="lazy"
              alt="team"
              src="https://api.sofascore.com/api/v1/team/2958/image"
            />
          </div>
          <h3 className="match__team--name">Vitesse</h3>
        </div>
        <div className="match__info">
          <div className="match__info--time">
            <span>13:00</span>
          </div>
          <div className="match__info--date">
            <span>11/03/2022</span>
          </div>
        </div>
        <div className="match__team match__team--away">
          <div className="match__team--logo">
            <img
              loading="lazy"
              alt="team"
              src="https://api.sofascore.com/api/v1/team/2702/image"
            />
          </div>
          <h3 className="match__team--name">Roma</h3>
        </div>
      </div>
    </Col>
  );
}

export default Match;
