import React, { PureComponent } from "react";
import {
  PickerContainer,
  Header,
  IndicatorsContainer,
  TitleHeader,
  SearchButton,
  HumidityBlock,
  TemperatureBlock
} from "./styles";
import PropTypes from "prop-types";
import { Slider } from "antd";
import { temperatureMarks, humidityMarks } from "./config";

class Picker extends PureComponent {
  state = {
    indicators: {
      temperature: 22,
      humidity: 60
    }
  };

  componentDidMount() {
    const { loadData } = this.props;
    const { indicators } = this.state;

    loadData(indicators);
  }

  changeIndicators = (value, type) => {
    this.setState(prevState => ({
      indicators: {
        ...prevState.indicators,
        [type]: value
      }
    }));
  };

  render() {
    const { indicators } = this.state;
    const { temperature, humidity } = indicators;
    const { isDataLoading, filterCitiesByIndicators } = this.props;

    return (
      <PickerContainer is_active={!isDataLoading}>
        <TitleHeader>Choose your indicators</TitleHeader>
        <IndicatorsContainer>
          <TemperatureBlock>
            <Header>Temperature</Header>
            <Slider
              marks={temperatureMarks}
              vertical
              step={1}
              value={temperature}
              onChange={val => this.changeIndicators(val, "temperature")}
              max={50}
            />
          </TemperatureBlock>
          <HumidityBlock>
            <Header>Humidity</Header>
            <Slider
              value={humidity}
              step={1}
              marks={humidityMarks}
              onChange={val => this.changeIndicators(val, "humidity")}
            />
          </HumidityBlock>
        </IndicatorsContainer>
        <SearchButton
          type="danger"
          onClick={() => filterCitiesByIndicators(indicators)}
        >
          Go!
        </SearchButton>
      </PickerContainer>
    );
  }
}

export default Picker;

Picker.propTypes = {
  loadData: PropTypes.func,
  cities: PropTypes.array
};
