import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aptImg from 'Images/Nav/aptImg.png';
import adImg from 'Images/Nav/adImg.png';
import './Nav.scss';
import DetailBoxInNav from 'Components/DetailBoxInNav';
import DetailBoxInOffice from 'Components/DetailBoxInOffice/DetailBoxInOffice';
import DetailBoxInARoom from 'Components/DetailBoxInARoom/DetailBoxInARoom';
import DetailBoxInTwoRoom from 'Components/DetailBoxInTwoRoom/DetailBoxInTwoRoom';
import DetailBoxInApt from 'Components/DetailBoxInApt/DetailBoxInApt';

class Nav extends Component {
  state = {
    activeTab: null,
  };

  menuDown = (num) => {
    this.setState({
      activeTab: num,
    });
  };

  menuUp = (e) => {
    this.setState({
      activeTab: e,
    });
  };

  render() {
    return (
      <>
        <div className='nav'>
          <div className='navMenu'>
            <div className='logoWrap'>
              <Link to='/'>
                <img className='mainLogo' src='https://s.zigbang.com/v1/web/common/new/h_logo_new.png' alt='직방' />
              </Link>
            </div>
            <div className='naviWrap'>
              <ul className='list'>
                <li
                  className='aptHover'
                  // onMouseOver={() => this.menuDown(0)}
                  // onMouseLeave={this.menuUp}
                >
                  <div className='aptBox'>
                    <Link className='clickTextApt' onMouseOver={() => this.menuDown(5)} onMouseLeave={() => this.menuUp(null)} to={''}>
                      아파트
                      <img src={aptImg} className='aptOrangeImg' alt='아파트이미지' />
                      <p className='smallTextApt'>(매매/전월세/신축분양)</p>
                      <DetailBoxInApt menuDown={this.state.activeTab} />
                    </Link>
                  </div>
                </li>
                <li className='has' onMouseOver={() => this.menuDown(4)} onMouseLeave={() => this.menuUp(null)}>
                  <Link className='clickText' to='/'>
                    빌라, 투룸+
                    <p className='smallText'>(매매/전월세/신축분양)</p>
                    <DetailBoxInTwoRoom menuDown={this.state.activeTab} />
                  </Link>
                </li>
                <li className='has' onMouseEnter={() => this.menuDown(3)} onMouseLeave={() => this.menuUp(null)}>
                  <Link className='clickText' to='/'>
                    원룸
                    <p className='smallText'>(매매/전월세)</p>
                    <DetailBoxInARoom menuDown={this.state.activeTab} />
                  </Link>
                </li>
                <li className='has' onMouseEnter={() => this.menuDown(0)} onMouseLeave={() => this.menuUp(null)}>
                  <Link className='clickText' to='/'>
                    오피스텔/도시형생활주택
                    <p className='smallText'>(전/월세)</p>
                  </Link>
                  <DetailBoxInNav menuDown={this.state.activeTab} />
                </li>
                <li className='has' onMouseEnter={() => this.menuDown(2)} onMouseLeave={() => this.menuUp(null)}>
                  <Link className='clickText' to='/'>
                    창업/사무실
                    <p className='smallText'>(임대/매매)</p>
                  </Link>
                  <DetailBoxInOffice menuDown={this.state.activeTab} />
                </li>
              </ul>
            </div>
            <div className='navRight'>
              <Link to='/emailLogin' className='emailLogin'>
                <div className='loginButton'>
                  <button className='clickButton'>
                    <p className='clickButtonText'>로그인 및 회원가입</p>
                  </button>
                </div>
              </Link>
              <div className='adButton'>
                <img src={adImg} className='ad' alt='광고문의' />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
