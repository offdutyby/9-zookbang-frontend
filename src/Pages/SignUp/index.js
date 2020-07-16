import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmPassword = (event) => {
    this.setState({
      confirm_password: event.target.value,
    });
  };

  handleComparePassword = (event) => {
    if (event.keyCode === 9) {
    }
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  doesPasswordMatch() {
    const { password, confirm_password } = this.state;
    return password === confirm_password;
  }

  handleButton = () => {
    fetch('http://10.58.0.113:8000/account/sign-up', {
      // fetch 인자의 첫 번째 인자는 api 주소고, 두 번째 인자는 객체 형태이고
      method: 'POST', // 메소드 뒤에 포스트를 스트링으로 적어줘야 하는데, get은 디폴트 값이 원래 있어서 안 써줘도 됨.
      body: JSON.stringify({
        // body를 json화 시켜서 보내줘야 함. 토큰이 들어오면 json body에 들어옴.
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('access_token', res.token);
      });
  };

  render() {
    return (
      <>
        <div className='signupContainer'>
          <div className='signupBox'>
            <div className='signupTextBox'>
              <p className='signupTexta'>간편하게 가입하고</p>
              <p className='signupTextb'>다양한 서비스를 이용하세요.</p>
            </div>
            <div className='inputContainer'>
              <div className='emailAddressBox'>
                <input
                  className='emailAddress'
                  type='text'
                  placeholder='이메일주소'
                  onChange={this.handleEmail}
                  maxlength='50'
                  autofocus=''
                  style={{
                    borderColor: this.state.email.length > 5 ? 'rgb(119, 117, 117)' : '',
                  }}
                />
              </div>
              <div className='passwordBox'>
                <input
                  className='password'
                  type='password'
                  placeholder='영문, 숫자 포함 8자 이상'
                  onChange={this.handlePassword}
                  style={{
                    borderColor: this.state.password.length > 5 ? 'rgb(119, 117, 117)' : '',
                  }}
                />
              </div>
              <div className='confirmPasswordBox'>
                <input
                  className='confirmPassword'
                  type='password'
                  placeholder='비밀번호 재입력'
                  onChange={this.handleConfirmPassword}
                  style={{
                    borderColor: this.state.password && this.state.confirm_password ? 'rgb(119, 117, 117)' : '',
                  }}
                />
              </div>
            </div>
            <Link to='/Auth'>
              <button className='nextButton' onClick={this.handleButton} type='submit'>
                <p className='nextText'>다음</p>
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default SignUp;
