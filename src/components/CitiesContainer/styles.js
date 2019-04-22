import styled from "styled-components";
import { Spin } from "antd";

const CitiesContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 10px 30px;
`;

const CenteredLoader = styled(Spin)`
  &&& {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
`;

const EmptyHeader = styled.h1`
  margin-top: 40px;
`;

export { CitiesContainerWrapper, CenteredLoader, EmptyHeader };
