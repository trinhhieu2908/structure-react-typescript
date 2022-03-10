import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "./styles.scss";
import NavBar from "../common/NavBar";

const { Header, Content, Footer } = Layout;

function LayoutApp(props: any) {
  return (
    <Layout className="layout">
      <Header>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <NavBar />
        </div>
      </Header>
      <Content>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default LayoutApp;
