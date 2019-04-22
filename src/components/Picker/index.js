import React, { PureComponent } from "react";
import { PickerContainer } from "./styles";
import PropTypes from "prop-types";

class Picker extends PureComponent {
  render() {
    return <PickerContainer>Picker</PickerContainer>;
  }
}

export default Picker;

Picker.propTypes = {
  changeIndicators: PropTypes.func
};
