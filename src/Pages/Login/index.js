import React, { Component } from 'react';
import logo from 'Images/Login/logo.png';
import { Link } from 'react-router-dom';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = (e) => {
    if (e.key === 13) {
      this.setState({
        email: '',
        password: '',
      });
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleButton = () => {
    fetch('http://10.58.0.113:8000/account/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('access_token', res.token);
      });
  };

  render() {
    console.log(this.state.email, this.state.password);
    return (
      <section className='containerLogin'>
        <div className='containerLoginBoxWrap'>
          <div className='containerLoginBox'>
            <div className='logoBox'>
              <img className='mainLogo' alt='직방메인로고' src={logo} />
              <div className='logoWithDescriptionBox'>
                <div className='descriptionA'>간편하게 로그인하고</div>
                <div className='descriptionB'>다양한 서비스를 이용하세요.</div>
              </div>
            </div>
            <div className='inputBox'>
              <div className='emailAddressBox'>
                <div className='inputEmaillAddress'>
                  <div className='innerbBox'>
                    <input
                      onChange={this.handleInput}
                      style={{
                        borderColor: this.state.email.length > 5 ? 'rgb(119, 117, 117)' : '',
                      }}
                      value={this.state.email}
                      name='email'
                      type='text'
                      placeholder='이메일주소'
                      className='box'
                    />
                  </div>
                </div>
                <div className='inputPassword'>
                  <div className='innerBox'>
                    <input
                      onChange={this.handleInput}
                      value={this.state.password}
                      style={{
                        borderColor: this.state.password.length > 5 ? 'rgb(119, 117, 117)' : '',
                      }}
                      name='password'
                      type='password'
                      placeholder='비밀번호'
                      className='box'
                    />
                    {/*  */}
                  </div>
                </div>
              </div>
              <div className='loginEmailScreenWrap'>
                <button type='button' className='btn'>
                  <div className='text'>아이디찾기</div>
                </button>
                <div className='bar'>|</div>
                <button type='button' className='btn'>
                  <div className='text'>비밀번호찾기</div>
                </button>
                <div className='bar'>|</div>
                <Link to='/SignUp' className='btnA'>
                  <div className='text'>회원가입</div>
                </Link>
              </div>
            </div>
          </div>
          <div className='containerStartButton'>
            <div className='startButton'>
              <Link to='/main' className='btnB'>
                {' '}
                <button className='startText' onClick={this.handleButton} type='submit'>
                  시작하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
