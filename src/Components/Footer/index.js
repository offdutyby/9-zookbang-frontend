import React, { Component } from 'react';
import blogicon from 'Images/Footer/blogicon.png';
import fbicon from 'Images/Footer/fbicon.png';
import navericon from 'Images/Footer/navericon.png';
import youtubeicon from 'Images/Footer/youtubeicon.png';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <>
        <div className='containerFooter'>
          <div className='footerWrap'>
            <div className='textLink'>
              <ul className='textAlign'>
                <li className='text'>회사소개</li>
                <p className='bar'>|</p>
                <li className='text'>이용약관</li>
                <p className='bar'>|</p>
                <li className='text'>개인정보 처리방침</li>
                <p className='bar'>|</p>
                <li className='text'>위치기반 서비스 이용약관</li>
                <p className='bar'>|</p>
                <li className='text'>중개사 사이트 바로가기</li>
              </ul>
            </div>
            <div className='copyrightWrap'>
              <div className='copyrightTextBox'>
                <p className='copyrightText'>
                  상호 : (주)직방 &nbsp;|&nbsp; 대표 : 안성우 &nbsp;|&nbsp; 사업자등록번호 : 120-87-61559
                  <br />
                  주소 : 서울특별시 서초구 서초대로 411, 5층(서초동,GT타워) (우 : 06615)
                  <br />
                  팩스 : 02-568-4908 &nbsp;|&nbsp;
                  <br />
                  통신판매업 신고번호 : 제2020-서울서초-0852호
                  <br />
                  서비스 이용문의 : 1661-8734 &nbsp;|&nbsp; 이메일 : cs@zigbang.com &nbsp;|&nbsp; 서비스제휴문의 : partnership@zigbang.com
                </p>
              </div>
              <div className='linkImgBox'>
                <img src={fbicon} className='linkImg' alt='페이스북' />
                <img src={youtubeicon} className='linkImg' alt='유튜브' />
                <img src={blogicon} className='linkImg' alt='블로그' />
                <img src={navericon} className='linkImg' alt='네이버' />
              </div>
            </div>

            <div className='bottomcopyright'>Copyright © ZIGBANG. All Rights Reserved.</div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
