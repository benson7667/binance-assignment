import React, { Component } from "react";
import { func, string } from "prop-types";
import { StyledButton } from "./styles";

class Button extends Component {
  render() {
    const { onClick, style, value } = this.props;

    return (
      <StyledButton onClick={onClick} style={{ ...style }} value={value}>
        {value}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  onClick: func.isRequired,
  value: string,
};

export default Button;
