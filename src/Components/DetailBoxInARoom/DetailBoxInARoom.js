import React, { Component } from 'react';
import './DetailBoxInARoom.scss';

class DetailBoxInARoom extends Component {
  render() {
    console.log(this.props.menuDown);
    return (
      <>
        <div className='DetailBoxInARoom'>
          <div className={`infoBox ${this.props.menuDown === 3 ? 'productShow' : 'hide'}`}>
            <ul className='infoList'>
              <li className='infoText'>방찾기</li>
              <li className='infoText'>찜한매물</li>
              <li className='infoText'>방 내놓기(전월세만)</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default DetailBoxInARoom;
