import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AuthNext.scss';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorization_number: '',
    };
  }

  handleInput = (e) => {
    if (e.key === 13) {
      this.setState({
        authorization_number: '',
      });
    }
    this.setState({
      authorization_number: e.target.value,
    });
  };

  handleButton = () => {
    fetch('http://10.58.0.113:8000/account/phone-confirm', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        phone_number: this.state.phone_number,
        authorization_number: this.state.authorization_number,
      }),

      // body: JSON.stringify({
      // data: {
      //     auth_number: this.state.auth_number,
      //     // authorization_number: value.certifiNumber,
      //     }
      // //   password: this.state.password,
      // //   백엔드랑 맞추자!!
      // }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    // .then((data) => {
    //   console.log(data);
    //   localStorage.setItem("token", data.Authorization);
    //   if (data.message === "LOGIN SUCCESS") {
    //     this.props.history.push("/");
    //   }
    // });
  };

  render() {
    return (
      <>
        <div className='authContainer'>
          <div className='authWrap'>
            <div className='authTextBox'>
              <div className='texta'>010-2516-9400로 전송된</div>
              <div className='textb'>4자리 숫자를 입력해주세요.</div>
            </div>

            <div className='bar'>
              <input
                className='barText'
                //  type="number"
                onChange={this.handleInput}
                name='phonenumber'
                maxlength='12'
                value={this.state.authorization_number}
                //  name="email"
              />
            </div>
            <div className='nexttime'>재전송 받기</div>
            <Link to='/main'>
              <div
                className='nextbutton'
                style={{
                  backgroundColor: this.state.authorization_number.length === 4 ? 'rgb(250, 149, 11)' : '',
                }}
              >
                <button
                  className='nextText'
                  onClick={this.handleButton}
                  style={{
                    backgroundColor: this.state.authorization_number.length === 4 ? 'rgb(250, 149, 11)' : '',
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
