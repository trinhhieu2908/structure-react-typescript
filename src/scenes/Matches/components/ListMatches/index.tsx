import React from "react";
import "./styles.scss";
import { Row, Col } from "antd";

import PremierLeague from "../../../../assets/images/Premier-League.png";
import Match from "../Match";

type Props = {};

function ListMatches(props: Props) {
  return (
    <>
      <h2>Upcoming Match</h2>
      <div className="site-layout-content">
        <Row gutter={[24, 24]}>
          <Match />
          <Match />
          <Match />
        </Row>
      </div>
      <h2>Past Match</h2>
      <div className="site-layout-content">
        <Row gutter={[24, 24]}>
          <Match />
          <Match />
          <Match />
          <Match />
        </Row>
      </div>
    </>
  );
}

export default ListMatches;
