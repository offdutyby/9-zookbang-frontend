import React, { Component } from "react";
import "./Main.scss";
import mainOimg from "Images/Main/mainOimg.png";
import Nav from "Components/Nav";
import SearchBarInMain from "./SearchBarInMain/index";
import Footer from "Components/Footer";
import app from "Images/Main/app.png";
import google from "Images/Main/google.png";
import appdownload from "Images/Main/appdownload.jpg";
import apt from "Images/Main/apt.png";
class Main extends Component {
  render() {
    return (
      <>
        <Nav />
          <div className="containerMain">
            <div className="mainWrap">
              <div className="mainImgBox">
                <img src={mainOimg} alt="좋은집 구하는기술" className="mainImg" />
                <SearchBarInMain />
              </div>
              <div className="noticeContainerA">
                <div className="noticeBox">
                <div className="introduction">
                  <p className="title">
                    소개할게요
                  </p>
                  <img src={apt} alt="래미안" className="aptImg" />
                </div>
                <div className="newsBox">
                  <div className="textBox">
                    <p className="title">뉴스</p>
                    <button className="moreButton">
                      더보기
                    </button>
                  </div>
                  <ul className="moreIndex">
                    <li className="moreIndexText">
                      직방 #살아보기 신청하기
                    </li>
                    <li className="moreIndexText">
                      [고궁뷰]0원집 구경하기
                    </li>
                    <li className="moreIndexText">
                      뜨는 동네, 번화가에서 별 탈없이 사는 법
                    </li>
                    <li className="moreIndexText">
                      성수동 원롬, 공짜로 살아본 이야기
                    </li>
                    <li className="moreIndexText">
                      허위매물 잡는 직방 '허위매물연구소'
                    </li>
                  </ul>
                </div>
                <div className="appBox">
                <div className="textBox">
                    <p className="title">공지사항</p>
                    <button className="moreButton">
                      더보기
                    </button>
                  </div>
                  <ul className="moreIndex">
                    <li className="moreIndexText">
                      [공지] 직방 개인정보처리방침(2020/05/01) 개정
                    </li>
                    <li className="moreIndexText">
                      [공지] 직방 개인정보처리방침(2020/02/28) 개정
                    </li>
                    <li className="moreIndexText">
                      [공지] 직방 위치기반서비스 이용약관
                    </li>
                    <li className="moreIndexText">
                      [공지] 직방 서비스 이용약관(2020/01/13)개정안내
                    </li>
                    <li className="moreIndexText">
                      [공지] 안심매물관리규정 및 관련 정책 개정 안내
                    </li>
                  </ul>
                </div>
                </div>

              </div>
              <div className="appDownloadContainer">
                <div className="appDownloadBox">
                  <img src={appdownload} alt="앱다운로드이미지" className="appDownloadImg" /> 
                  <div className="appDownloadTextBox">
                     <p className="appDownloadText">직방앱을 다운받으세요!</p>
                     <div className="appBox">
                        <img src={app} alt="앱사진1" className="app" />
                     </div>
                     <div className="googlBox">
                        <img src={google} alt="앱사진1" className="google" /> 
                     </div>
                </div>
                </div>
              </div>
              <div className="propertyAd">
                <div className="propertyAdTextBox">
                  <p className="propertyText">중개 사무소 가입 및 광고 방법이 궁금하신가요?</p>
                  <div className="propertyDetailBox">
                    <p className="propertyDetailText">자세히 알아보기 </p>
                  </div>
                </div>
              </div>
            </div>
         <Footer />
       </div>
      </>
    );
  }
}

export default Main;
