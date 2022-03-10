import React from "react";
import { Layout, Row, Col, Card } from "antd";

const { Header, Content, Footer } = Layout;

function Lay() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "20px 100px" }}>
        <div className="site-layout-content">
          <Row gutter={[24, 24]}>
            <Col md={24} xl={12}>
              <div className="card-match">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </div>
            </Col>
            <Col md={24} xl={12}>
              <Card className="card-match">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col md={24} xl={12}>
              <Card className="card-match">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Lay;
