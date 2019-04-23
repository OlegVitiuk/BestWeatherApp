import styled from "styled-components";
import { Button } from "antd";

const PickerContainer = styled.div`
  &&& {
    width: 300px;
    position: fixed;
    flex-direction: column;
    align-items: center;
    left: 20px;
    top: 60px;
    background-color: rgba(36, 37, 42, 1);
    color: #fff;
    padding: 10px;
    display: ${props => (props.is_active ? "flex" : "none")};
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  height: 100px;
`;

const Header = styled.span`
  color: #fff;
  font-style: italic;
`;

const TitleHeader = styled.h3`
  color: #fff;
  font-weight: 600;
`;

const SearchButton = styled(Button)`
  &&& {
    margin-top: 40px;
    color: rgba(36, 37, 42, 1);

    &:hover {
      color: #fff;
    }
  }
`;

const TemperatureBlock = styled.div`
  height: 150px;
  & > span {
  }
`;

const HumidityBlock = styled.div`
  width: 170px;
  margin-left: 10px;
`;

export {
  PickerContainer,
  Header,
  IndicatorsContainer,
  TitleHeader,
  SearchButton,
  TemperatureBlock,
  HumidityBlock
};
