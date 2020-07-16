import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'Images/Login/logo.png';
import googleimg from 'Images/mailLogin/googleimg.png';
import fblogo from 'Images/mailLogin/fbimg.png';
import emaillogo from 'Images/mailLogin/emaillog.png';
import katalkContent from 'Images/mailLogin/katalkContent.png';
import KakaoLogin from 'react-kakao-login';
import './EmailLogin.scss';
// import { KakaoSVG } from "./SvgPath";
// import axios from "axios";

class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      provider: '',
    };
  }

  responseKakao = (res) => {
    window.Kakao.Auth.loginForm({
      success: (res) => {
        console.log('heheheheh', res.access_token);
        fetch('http://10.58.5.55:8000/account/kakao', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: res.token,
          },
        })
          .then((res) => res.json())
          .then((res) => console.log('eheheh', res));
      },
    });
  };

  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <section className='containerEmailLogin'>
        <div className='containerLoginBoxWrap'>
          <div className='containerLoginBox'>
            <div className='logoBox'>
              <img className='mainLogo' alt='직방메인로고' src={logo} />
              <div className='logoWithDescriptionBox'>
                <div className='descriptionA'>간편하게 로그인하고</div>
                <div className='descriptionB'>다양한 서비스를 이용하세요.</div>
              </div>
            </div>
          </div>
          <div className='kakaoButtonWrap'>
            <div className='kakaoButton'>
              <KakaoLogin
                className='kakaoApi'
                jsKey='4b08df48b0b641bdb12fb165f5d17e4a'
                onSuccess={this.responseKakao}
                onFailure={this.responseFail}
                getProfile='true'
              >
                <img src={katalkContent} alt='카톡이미지' className='katalkContent' />
                카카오톡으로 시작하기
              </KakaoLogin>
            </div>
          </div>
          <div className='anotherWay'>
            <span className='anotherWayText'>다른 방법으로 시작하기</span>
            <div className='anotherWayImg'>
              <img src={fblogo} alt='페이스북' className='logoImg' />
              <img src={googleimg} alt='구글' className='logoImg' />
              <Link to='/Login'>
                <img src={emaillogo} alt='이멜' className='logoImg' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EmailLogin;
