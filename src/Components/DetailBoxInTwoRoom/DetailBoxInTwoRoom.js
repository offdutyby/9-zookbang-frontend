import React, { Component } from 'react';
import './DetailBoxInTwoRoom.scss';

class DetailBoxInTwoRoom extends Component {
  render() {
    console.log(this.props.menuDown);
    return (
      <>
        <div className='DetailBoxInTwoRoom'>
          <div className={`infoBox ${this.props.menuDown === 4 ? 'productShow' : 'hide'}`}>
            <ul className='infoList'>
              <li className='infoText'>빌라,투룸 찾기</li>
              <li className='infoText'>찜한 매물</li>
              <li className='infoText'>빌라 내놓기(전/월세만)</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default DetailBoxInTwoRoom;
