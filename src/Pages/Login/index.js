import React, { Component } from "react";
// import { URL_PATH } from "config.js";
import logo from "../../Images/Login/logo.png";
import "./Login.scss";
// import { render } from "node-sass";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }


handleInput = (e) => {
    if(e.key === 13) {
        this.setState({
            email:"",
            password:"",
        })
    }
    this.setState({
        [e.target.name] : e.target.value,
    });
};

handleButton = () => {
    fetch("", {
        method: "POST", 
        body: JSON.stringify({
        
          user_id: this.state.email,
          password: this.state.password,
        //   백엔드랑 맞추자!!
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.Authorization);
          if (data.message === "LOGIN SUCCESS") {
            this.props.history.push("/");
          }
        });
};


render() {
    console.log(this.state.email, this.state.password);
    return (
        <section className="container">
            <div className="containerLoginBoxWrap">
                <div className="containerLoginBox">
                    <div className="logoBox">
                        <img className="mainLogo" alt="직방메인로고" src={logo}/>
                        <div className="logoWithDescriptionBox">
                            <div className="descriptionA">간편하게 로그인하고</div>
                            <div className="descriptionB">다양한 서비스를 이용하세요.</div>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="emailAddressBox">
                            <div className="inputEmaillAddress">
                                <div className="innerbBox">
                                    <input onChange={this.handleInput} value={this.state.email} name="email" type="text" placeholder="이메일주소" className="box" />
                                </div>
                            </div>
                            <div className="inputPassword">
                                <div className="innerBox">
                                    <input onChange={this.handleInput} value={this.state.password} name="password"  placeholder="비밀번호" className="box" />
                                    {/* <div className="markBox">
                                        <div className="martText">표시</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loginEmailScreenWrap">
                        <button type="button" className="btn">
                          <div className="searchForIdButton">아이디찾기</div>
                        </button>
                        <button type="button" className="btn">
                          <div className="searchForpwd">비밀번호찾기</div>
                        </button>
                        <button type="button" className="btn">
                          <div className="signup">회원가입</div>
                        </button>
                      
                    </div>
                </div>
                <div className="containerStartButton">
                <div className="startButton">
                    <div className="startText">시작하기</div>
                </div>
            </div>
            </div>
            
        </section>
        
    );
}
}


export default Login;