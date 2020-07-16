import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.scss';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
    };
  }

  handleInput = (e) => {
    if (e.key === 13) {
      this.setState({
        phone_number: '',
      });
    }
    this.setState({
      phone_number: e.target.value,
    });
  };

  handleButton = () => {
    fetch('http://10.58.0.113:8000/account/phone-auth', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        phone_number: this.state.phone_number,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <>
        <div className='authContainer'>
          <div className='authWrap'>
            <div className='authTextBox'>
              <div className='texta'>휴대폰 번호를 입력하시면</div>
              <div className='textb'>문의 시 더욱 편리하게 연결됩니다.</div>
            </div>

            <div className='bar'>
              <input className='barText' onChange={this.handleInput} name='phonenumber' maxLength='12' value={this.state.phone_number} />
            </div>
            <div className='nexttime'>나중에하기</div>
            <Link to='/authnext'>
              <div
                className='nextbutton'
                style={{
                  backgroundColor: this.state.phone_number.length > 10 ? 'rgb(250, 149, 11)' : '',
                }}
              >
                <button
                  className='nextText'
                  onClick={this.handleButton}
                  style={{
                    backgroundColor: this.state.phone_number.length > 10 ? 'rgb(250, 149, 11)' : '',
                  }}
                >
                  다음
                </button>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default Auth;
