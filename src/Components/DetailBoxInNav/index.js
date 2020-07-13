import React, { Component } from "react";
import "./DetailBoxInNav.scss";

class DetailBoxInNav extends Component {
  render() {
    return (
      <div
        className=
        {`DetailBoxInNav ${
          this.props.menuDown === 0 ? "productShow" : "hide"
        }`}
      >
        <div className="infoBox">
          <ul className="infoList">
            <li className="infoText">오피스텔 찾기</li>
            <li className="infoText">찜한 매물</li>
            <li className="infoText">오피스텔 내놓기(전/월세만)</li>
          </ul>
        </div>
     </div>
    );
  }
}

export default DetailBoxInNav;