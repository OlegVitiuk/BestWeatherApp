import styled from "styled-components";
import { Card } from "antd";

const PickerContainer = styled(Card)`
  &&& {
    width: 300px;
    position: fixed;
    left: 20px;
    top: 60px;
    background-color: rgba(36, 37, 42, 1);
    color: #fff;
  }
`;

export { PickerContainer };
