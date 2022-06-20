import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from "./components/index.js";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" component={<Homepage />} />
              <Route path="/exchange" component={<Exchanges />} />
              <Route path="/cryptocurrencies" component={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" component={<CryptoDetails />} />
              <Route path="/news" component={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
