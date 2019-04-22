import styled from "styled-components";
import { Card } from "antd";

const OtherCitiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const CityCard = styled(Card)`
  &&& {
    margin: 15px;
    background-color: rgba(51, 110, 123, 1);
    color: #fff;
  }
`;

export { OtherCitiesContainer, CityCard };
