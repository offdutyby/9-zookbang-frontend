import React, { Component } from "react";
import "./Auth.scss";

class Auth extends Component {
    render() {
        return (
            <>
             <div className="authContainer">
                 <div className="authWrap">
                     <div className="authTextBox">
                         <div className="texta">
                             휴대폰 번호를 입력하시면
                         </div>
                         <div className="textb">
                             문의 시 더욱 편리하게 연결됩니다.
                         </div>
                     </div>
                     
                     <div className="bar">
                         <input className="barText" type="text" />
                     </div>
                     <div className="nexttime">나중에하기</div>
                     <div className="nextbutton">
                         <div className="nextText">다음</div>
                     </div>
                 </div>
             </div>
            </> 
        );
    }
}
export default Auth;