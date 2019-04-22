import React from "react";
import PropTypes from "prop-types";
import { MainCityCard } from "./styles";

const MainCity = ({ mainCity }) => <MainCityCard>{mainCity.name}</MainCityCard>;

export default MainCity;

MainCity.propTypes = {
  mainCity: PropTypes.shape({})
};
