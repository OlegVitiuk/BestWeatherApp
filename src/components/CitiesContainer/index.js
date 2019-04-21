import React, { PureComponent } from "react";
import { CitiesContainerWrapper } from "./styles";
import axios from "axios";

class CitiesContainer extends PureComponent {
  async componentDidMount() {
    const res = await axios.get(
      "http://api.openweathermap.org/data/2.5/box/city?bbox=-180,-90,360,180,10000&appid=687127fe9b4d07799d1e6e8eeb3d94df"
    );
    console.log(
      res.data.list.filter(
        city => city.main.temp === 22 && city.main.humidity === 60
      )
    );
  }
  render() {
    return <CitiesContainerWrapper>HI</CitiesContainerWrapper>;
  }
}

export default CitiesContainer;
