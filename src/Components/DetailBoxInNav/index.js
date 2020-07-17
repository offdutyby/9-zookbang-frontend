import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailBoxInNav.scss';

class DetailBoxInNav extends Component {
  render() {
    console.log(this.props.menuDown);
    return (
      <>
        <div className='DetailBoxInNav'>
          <div className={`infoBox ${this.props.menuDown === 0 ? 'productShow' : 'hide'}`}>
            <ul className='infoList'>
              <Link to='/map' className='infoText'>
                <li className='infoText'>오피스텔 찾기</li>
              </Link>
              <li className='infoText'>찜한 매물</li>
              <li className='infoText'>오피스텔 내놓기(전/월세만)</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default DetailBoxInNav;
