import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./SignUp.scss";

class SignUp extends Component {
    render() {
        return (
            <>
            <div className="signupContainer">
                <div className="signupBox">
                    <div className="signupTextBox">
                        <p className="signupTexta">
                            간편하게 가입하고
                        </p>
                        <p className="signupTextb">
                           다양한 서비스를 이용하세요.
                        </p>
                    </div>
                    <div className="inputContainer">
                        <div className="emailAddressBox">
                            <input className="emailAddress" type="text" placeholder="이메일주소" />
                        </div>
                        <div className="passwordBox">
                            <input className="password" type="password" placeholder="영문, 숫자 포함 8자 이상" />
                        </div>
                        <div className="confirmPasswordBox">
                            <input className="confirmPassword" type="password" placeholder="비밀번호 재입력" />
                        </div>
                    </div>
                    <Link to="/Auth" >
                    <div className="nextButton">
                        <p className="nextText">
                            다음
                        </p>
                    </div>
                    </Link>
                </div>
            </div>
            </> 
        );
    }
}
export default SignUp ;