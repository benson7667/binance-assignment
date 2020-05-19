import React, { useContext } from "react";
import { Button } from "../../components";
import { StyledCryptoOrder } from "./styles";
import { ThemeContext } from "../../AppTheme";

const CryptoOrder = (props) => {
  const { dispatch } = useContext(ThemeContext);
  const toggleTheme = () => {
    dispatch({ type: "SWITCH_THEME" });
  };

  return (
    <StyledCryptoOrder>
      <Button
        value="Change Theme"
        style={{ width: 200 }}
        onClick={toggleTheme}
      />
    </StyledCryptoOrder>
  );
};

export default CryptoOrder;
