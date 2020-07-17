import React, { useState } from "react";
import styled from "styled-components";

const AgencyCommentInfo = ({ listData }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <AgencyCommentInformation
      toggle={toggle}
      show={listData.agencies && listData.agencies[0].agentComment === null}
    >
      <div
        className="AgencyComment-info-top"
        onClick={() => setToggle(!toggle)}
      >
        <div className="AgencyComment-info-top-title">담당자 한마디</div>
        <div className="AgencyComment-info-top-toggle" />
      </div>
      <div className="AgencyComment-info-dropdown">
        <div
          dangerouslySetInnerHTML={
            listData.agencies && {
              __html: listData.agencies[0].agentComment?.includes("\n")
                ? listData.agencies[0].agentComment.replace(/\n/g, "<br />")
                : listData.agencies[0].agentComment,
            }
          }
        ></div>
      </div>
    </AgencyCommentInformation>
  );
};

export default AgencyCommentInfo;

const AgencyCommentInformation = styled.div`
  background-color: white;
  display: ${(props) => (props.show ? "none" : "block")};
  .AgencyComment-info-top {
    margin-top: 10px;
    padding: 16px 13px;
    position: relative;
    cursor: pointer;
    &-title {
      font-size: 18px;
      line-height: 28px;
    }
    &-toggle {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_btn_arrow_open_24x24_nor_black-ca11bea3d2109bf00c76786fb2ae424e.png");
      background-size: cover;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 13px;
      top: 17px;
      display: inline-block;
      transform: ${(props) =>
        props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
      transition: 0.5s;
    }
  }
  .AgencyComment-info-dropdown {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 13px 17px;
    width: 100%;
    display: ${(props) => (props.toggle ? "block" : "none")};
    div {
      line-height: 19px;
      color: #757575;
      font-size: 16px;
      margin: 2px 4px 0;
      word-break: break-all;
    }
  }
`;
