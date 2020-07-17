import React, { Component } from 'react';
import './DetailBoxInOffice.scss';

class DetailBoxInOffice extends Component {
  render() {
    console.log(this.props.menuDown);
    return (
      <>
        <div className='DetailBoxInOffice'>
          <div className={`infoBox ${this.props.menuDown === 2 ? 'productShow' : 'hide'}`}>
            <ul className='infoList'>
              <li className='infoText'>상가,점포</li>
              <li className='infoText'>사무실</li>
              <li className='infoText'>공유오피스</li>
              <li className='infoText'>찜한 매물</li>
              <li className='infoText'>상가/사무실 내놓기</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default DetailBoxInOffice;
