import React from "react";
import { Layout } from "antd";
import "./Home.css";
import WeatherCarousel from "../Weather/WeatherCarousel.js";
const { Header, Footer, Content } = Layout;

const layout = () => (
  <Layout>
    <Header className="site-layout-header">
      Weather Of Cairo For Four Days
    </Header>
    <Content className="site-layout-content">
      <WeatherCarousel />
    </Content>
    <Footer className="site-layout-Footer">Made with ❤ by Arwa</Footer>
  </Layout>
);

export default layout;
