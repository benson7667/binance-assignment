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
      <div class="top">
        <Header />
      </div>

      <div class="left">
        <CryptoTrade />
      </div>

      <div class="center">
        <CryptoGraph />
      </div>

      <div class="right">
        <CryptoPrices />
      </div>

      <div class="bottom">
        <CryptoOrder />
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
