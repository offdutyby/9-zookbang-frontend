import React, { Component } from "react";
import "./KakaoLogin.scss";
// import Login from "Pages/Login";
// 카카오톡 로그인 정보 API 연동

class KakaoLogin extends Component {
    state = {

    }

    render() {
        return (
            <div className="main">
                <div className="article">
                    <div className="loginBanner">
                        <div className="wrapBanner">
                            <div className="infoBanner">
                                <stong className="title">카카오계정 하나로 충분합니다.</stong>
                                <p className="subTitle">Kakao의 모든 서비스 뿐 아니라 Melon, Daum등 다른 다양한 서비스까지""이제 카카오계정으로 이용해 보세요!</p>
                            </div>
                            {/* <img src={} alt="카카오이미지" className="kakaoImg"/> */}
                        <div className="wrapForm">
                            <h1 className="kakaoServiceLogo">
                                <span className="logoText">Kakao</span>
                            </h1>
                            <div className="loginForm">
                                <div className="loginEmailField">
                                    <div className="inputEmailBox" >
                                        <label className="inputEmail" />
                                        <input className="inputEmailText" datatype="text" validator="email_or_phone" placeholder="카카오계정(이메일 또는 전화번호)"/>
                                    </div> 

                                    <div className="inputpwdBox">
                                        <label className="inputPwd" />
                                        <input className="imputPwdText" datatype="text" placeholder="비밀번호" />
                                    </div>
                                </div>

                            </div>
                            <div className="setLogin">
                                <div className="itemCheck">
                                    <input className="check" type="checkbox" value="true" /> 
                                    <label className="checkBoxText" />
                                     <span className="text">로그인 상태 유지</span> 
                                </div>
                            </div>
                            <div className="errorAlert"></div>
                            <div className="wrapBtn">
                                <button className="submitBtn" />
                                 <span className="btnText">로그인</span>
                                <span className="line">::before<span className="lineOrText">또는</span>::after</span>
                                <button className="qrLogin" />
                                 <span className="QR코드 로그인"></span>

                            </div>
                            <div className="info">
                                <p className="linkJoin">회원가입</p>
                                <ul className="userList">
                                    <li className="linkUser">
                                        카카오계정
                                    </li>
                                    <li className="linkUser">
                                        비밀번호 찾기
                                    </li>
                                </ul>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default KakaoLogin;