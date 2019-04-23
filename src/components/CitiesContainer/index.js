import React, { PureComponent, Fragment } from "react";
import MainCity from "../MainCity";
import OtherCities from "../OtherCities";
import Picker from "../Picker";
import { CitiesContainerWrapper, CenteredLoader, EmptyHeader } from "./styles";
import { getCitiesInfo } from "api/requests";

class CitiesContainer extends PureComponent {
  state = {
    cities: null,
    filteredCities: null,
    isDataLoading: false
  };

  showLoader = () => {
    this.setState(() => ({
      isDataLoading: true
    }));
  };

  getCitiesInfo = async data => {
    const citiesBoxCoordinates = "-180,-90,180,90";
    const zoom = "10000";
    const { temperature, humidity } = data;

    try {
      this.showLoader();
      const res = await getCitiesInfo(citiesBoxCoordinates, zoom);
      const citiesList = res.data.list;

      console.log(citiesList, "uploaded cities");

      const filteredCities = res.data.list.filter(
        city =>
          city.main.temp === temperature && city.main.humidity === humidity
      );

      this.setState(() => ({
        cities: citiesList,
        filteredCities,
        isDataLoading: false
      }));
    } catch (e) {
      console.error(e.message);
    }
  };

  renderContent = () => {
    const { filteredCities } = this.state;
    const [mainCity, ...rest] = filteredCities;
    console.log(filteredCities, "cities");
    console.log(mainCity, "main");
    console.log(...rest, "rest");

    if (!filteredCities.length) {
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
      </Fragment>
    );
  };

  filterCitiesByIndicators = ({ temperature, humidity }) => {
    const { cities } = this.state;

    const filteredCities = cities.filter(
      city => city.main.temp === temperature && city.main.humidity === humidity
    );

    this.setState({
      filteredCities
    });
  };

  render() {
    const { isDataLoading, cities } = this.state;

    return (
      <CitiesContainerWrapper>
        {isDataLoading || !cities ? (
          <CenteredLoader size="large" />
        ) : (
          this.renderContent()
        )}
        <Picker
          filterCitiesByIndicators={this.filterCitiesByIndicators}
          loadData={this.getCitiesInfo}
          isDataLoading={isDataLoading}
        />
      </CitiesContainerWrapper>
    );
  }
}

export default CitiesContainer;
