import React, { PureComponent, Fragment } from "react";
import MainCity from "../MainCity";
import OtherCities from "../OtherCities";
import Picker from "../Picker";
import { CitiesContainerWrapper, CenteredLoader, EmptyHeader } from "./styles";
import { getCitiesInfo } from "api/requests";

class CitiesContainer extends PureComponent {
  state = {
    cities: null,
    paramsToSearch: {
      temperature: 21,
      humidity: 60
    },
    isDataLoading: false
  };

  showLoader = () => {
    this.setState(() => ({
      isDataLoading: true
    }));
  };

  getCitiesInfo = async () => {
    const citiesBoxCoordinates = "-180,-90,180,90";
    const zoom = "10000";
    const {
      paramsToSearch: { temperature, humidity }
    } = this.state;

    try {
      this.showLoader();
      const res = await getCitiesInfo(citiesBoxCoordinates, zoom);

      const filteredCities = res.data.list.filter(
        city =>
          city.main.temp === temperature && city.main.humidity === humidity
      );

      this.setState(() => ({
        cities: filteredCities,
        isDataLoading: false
      }));
    } catch (e) {
      console.error(e.message);
    }
  };

  changeIndicators = () => {};

  renderContent = () => {
    const { cities } = this.state;
    console.log(this.state.cities, "citites");
    const [mainCity, ...rest] = this.state.cities;
    console.log(mainCity, "main");
    console.log(...rest, "rest");

    if (!cities.length) {
      return (
        <EmptyHeader>
          There is no cities by search params. Please change params and try
          again.
        </EmptyHeader>
      );
    }

    return (
      <Fragment>
        <MainCity mainCity={mainCity} />
        <OtherCities otherCities={[...rest]} />
        <Picker changeIndicators={this.changeIndicators} />
      </Fragment>
    );
  };

  componentDidMount() {
    this.getCitiesInfo();
  }
  render() {
    const { isDataLoading, cities } = this.state;

    return (
      <CitiesContainerWrapper>
        {isDataLoading || !cities ? (
          <CenteredLoader size="large" />
        ) : (
          this.renderContent()
        )}
      </CitiesContainerWrapper>
    );
  }
}

export default CitiesContainer;
