import React, { Component } from 'react';
import './SearchBarDetail.scss';
// import subway from "Images/Search/subway.png";
// import building from "Images/Search/building.png";
// import compass from "Images/Search/compass.png";

//partneraside input 창에 부모요소에게 전달받은 onchange event 함수.(자식)
//partner.js 에서 fetch 함수로 데이터를 받아서.(부모)

// searchbardetail이 (자식)이고, searchbarinmain가 (부모)
// 부모에서 filter 한 데이터를 뜨게 해야한다.

//자식
class SearchBarDetail extends Component {
  render() {
    return (
      <>
        <div className={`SearchBarDetailContainer ${this.props.activeShow > 0 ? 'productShow' : 'hide'}`}>
          <div className='searchBarDetailBox'>
            <div className='searchbox'></div>
          </div>
        </div>
      </>
    );
  }
}
export default SearchBarDetail;
