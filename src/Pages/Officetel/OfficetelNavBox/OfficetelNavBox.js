import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OfficetelNavBox = () => {
  return (
    <OfficetelNav>
      <OfficetelNavItem className="on" to="/">
        오피스텔 찾기
      </OfficetelNavItem>
      <OfficetelNavItem to="/jjim">찜한 매물</OfficetelNavItem>
      <OfficetelNavItem to="/sell">오피스텔 내놓기(전/월세만)</OfficetelNavItem>
    </OfficetelNav>
  );
};

export default OfficetelNavBox;

//styled componenet
//margin-top은 nav바 넣기전
const OfficetelNav = styled.div`
  padding: 0 20px 0 32px;
  margin-top: 72px;
  border-top: 1px solid rgb(225, 225, 225);
  border-bottom: 1px solid rgb(225, 225, 225);
`;

const OfficetelNavItem = styled(Link)`
  padding: 15px 20px;
  display: inline-block;
  font-size: 15px;
  line-height: 18px;
  color: ${(props) =>
    props.className === "on" ? "rgb(68,68,68)" : "rgb(166, 166, 166)"};
  cursor: pointer;
  font-weight: ${(props) => (props.className === "on" ? "bold" : "none")};
  position: relative;
  text-decoration: none;

  &:hover {
    color: rgb(68, 68, 68);
  }
  &:after {
    content: "";
    display: ${(props) => (props.className === "on" ? "block" : "none")};
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    border-bottom: 2px solid rgb(0, 0, 0);
  }
`;
