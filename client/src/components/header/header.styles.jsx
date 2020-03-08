import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding:  10px 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const LogoName = styled(Link)`
  height: 67%;
  padding: 5px 20px;
  border: 2px solid black;
  align-items: center;
  text-align: center;
  font-size: 25px;
  margin-top: 5px;
  letter-spacing: .2em;
  font-weight: bold;
`;
// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
