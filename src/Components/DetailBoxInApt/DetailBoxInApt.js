import React, { Component } from 'react';
import './DetailBoxInApt.scss';

class DetailBoxInApt extends Component {
  render() {
    console.log(this.props.menuDown);
    return (
      <>
        <div className='DetailBoxInApt'>
          <div className={`infoBox ${this.props.menuDown === 5 ? 'productShow' : 'hide'}`}>
            <ul className='infoList'>
              <li className='infoText'>매매/전월세</li>
              <li className='infoText'>신축분양</li>
              <li className='infoText'>인구흐름</li>
              <li className='infoText'>우리집 내놓기</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default DetailBoxInApt;
