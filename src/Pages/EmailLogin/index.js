import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "Images/Login/logo.png";
import googleimg from "Images/mailLogin/googleimg.png";
import fblogo from "Images/mailLogin/fbimg.png";
import emaillogo from "Images/mailLogin/emaillog.png";
import katalkContent from "Images/mailLogin/katalkContent.png";
import KakaoLogin from 'react-kakao-login';
import "./EmailLogin.scss";

class EmailLogin extends Component {
    state = {

    }

    onLoginKakao = (res)=>{
        window.Kakao.Auth.login(

        )
    }

    // const LoginBox = ({ history }) => {
    //     const [token, setToken] = useState("");
    //     const loginWithKakao = () => {
    //       window.Kakao.Auth.login({
    //         success: (authObj) => {
    //           console.log(authObj);
    //           //setToken(authObj.access_token) 비동기로, 이를 사용하면 바로 이동하지 못함.
    //           fetch("http:// 10.58.3.78:8000/user/social_login", {
    //             method: "POST",
    //             headers: {
    //               Authorization: authObj.access_token,
    //             },
    //           })
    //             .then((res) => res.json())
    //             .then((res) => {
    //               if (res.token) {
    //                 localStorage.setItem("Login-token", res.token);
    //                 alert("로그인 되었습니다.");
    //                 history.push("/");
    //               } else {
    //                 alert("다시 확인해주세요.");
    //               }
    //             });
    //         },
    //         fail: function (err) {
    //           console.log("에러", err);
    //         },
    //       });
    //     };
    // }
     
    render() {
        console.log(this.state.email, this.state.password);
        // const Login = (props: IProps) => { const { onLoginKakao } = props;
        return (
            <section className="containerEmailLogin">
                <div className="containerLoginBoxWrap">
                    <div className="containerLoginBox">
                        <div className="logoBox">
                            <img className="mainLogo" alt="직방메인로고" src={logo}/>
                            <div className="logoWithDescriptionBox">
                                <div className="descriptionA">간편하게 로그인하고</div>
                                <div className="descriptionB">다양한 서비스를 이용하세요.</div>
                            </div>
                        </div>
                    </div>
                    <div className="kakaoButtonWrap">
                         <div className="kakaoButton">
                              {/* <img src={katalkContent} alt="카톡이미지" className="katalkContent" /> */}
                              {/* <span className="kakaoText">카카오톡으로 시작하기</span> */}
                              <KakaoLogin 
                               className="kakaoApi"
                               jsKey='4b08df48b0b641bdb12fb165f5d17e4a'
                               onSuccess={this.onLoginKakao}
                               onFailure={result => console.log(result)}
                               getProfile={true}
                               >
                              <img src={katalkContent} alt="카톡이미지" className="katalkContent" />
                                카카오톡으로 시작하기
                              </KakaoLogin>
                        
                         </div>
                           
                    </div>
                    <div className="anotherWay">
                        <span className="anotherWayText">
                            다른 방법으로 시작하기
                        </span>
                        <div className="anotherWayImg">
                            <img src={fblogo} alt="페이스북" className="logoImg"/>
                            <img src={googleimg} alt="구글" className="logoImg"/>
                            <Link to="/Login"><img src={emaillogo} alt="이멜" className="logoImg"/></Link>
                            
                        </div>
                    </div>
                </div>
                
                
            </section>
            
        );
    }
    
    
    
    
    
}
export default EmailLogin ;