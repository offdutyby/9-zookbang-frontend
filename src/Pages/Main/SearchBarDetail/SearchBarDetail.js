import React, { Component } from 'react';
import './SearchBarDetail.scss';
import subwayimg from 'Images/Search/subway.png';
import building from 'Images/Search/building.png';
// import compass from 'Images/Search/compass.png';

//partneraside input 창에 부모요소에게 전달받은 onchange event 함수.(자식)
//partner.js 에서 fetch 함수로 데이터를 받아서.(부모)

// searchbardetail이 (자식)이고, searchbarinmain가 (부모)
// 부모에서 filter 한 데이터를 뜨게 해야한다.

//자식
class SearchBarDetail extends Component {
  // componentDidMount() {
  //   // fetch("detailData.json")
  //   fetch(`${URL_PATH} ${this.props.history.location.pathname.replace('/detail/', '')}`)
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ detailData: res }));
  // }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <>
        <div
          className={`SearchBarDetailContainer 
          ${this.props.data.cities ? 'productShow' : 'hide'}`}
        >
          <div className='searchBarDetailBox'>
            <ul className='searchbox'>
              {data.complexes &&
                data.complexes.map((complex) => {
                  return (
                    <li className='search'>
                      <img src={building} className='buildingImg' />
                      <span className='name'>
                        {complex.name} ({complex.type})
                      </span>
                      <span className='region'>
                        {complex.city} {complex.district} {complex.province}
                      </span>
                    </li>
                  );
                })}
              {data.subways &&
                data.subways.map((subway) => {
                  return (
                    <li className='search'>
                      <img src={subwayimg} className='buildingImg' />
                      <span className='name'>
                        {subway.name} ({subway.line.join(', ')})
                      </span>
                      <span className='region'>{subway.city}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default SearchBarDetail;
