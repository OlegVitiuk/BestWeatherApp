import React from "react";
import { OtherCitiesContainer, CityCard } from "./styles";
import PropTypes from "prop-types";

const OtherCities = ({ otherCities }) => (
  <OtherCitiesContainer>
    {otherCities.map(city => (
      <CityCard key={city.id} size="small">
        {city.name}
      </CityCard>
    ))}
  </OtherCitiesContainer>
);

OtherCities.propTypes = {
  otherCities: PropTypes.array
};

export default OtherCities;
