import React from "react";
import { Button } from "../../components";
import { StyledCryptoOrder } from "./styles";

const CryptoOrder = (props) => {
  return (
    <StyledCryptoOrder>
      <Button
        value="Click Me!"
        style={{ width: 200 }}
        onClick={() => {
          console.log("Clicked!!!");
        }}
      />
    </StyledCryptoOrder>
  );
};

export default CryptoOrder;
