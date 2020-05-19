import React from "react";
import {
  Header,
  CryptoGraph,
  CryptoPrices,
  CryptoOrder,
  CryptoTrade,
} from "../../components";
import { StyledDashboard } from "./styles";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <div className="top">
        <Header />
      </div>

      <div className="left">
        <CryptoTrade />
      </div>

      <div className="center">
        <CryptoGraph />
      </div>

      <div className="right">
        <CryptoPrices />
      </div>

      <div className="bottom">
        <CryptoOrder />
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
