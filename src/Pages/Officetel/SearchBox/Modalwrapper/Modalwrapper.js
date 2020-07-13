import React, { useState } from "react";
import styled from "styled-components";

const Modalwrapper = ({ modalDisplayOn, setModalDisplayOn, setSaleType }) => {
  const [bgColor, setBgColor] = useState(0);
  const [typeSelect, setTypeSelect] = useState("전체");
  const [submitMouseDown, setSubmitMouseDown] = useState(false);

  const SelectedImgSrc =
    "https://s.zigbang.com/zigbang-www/_next/static/ic_btn_radio_24x24_sel_yellow-551d9662f2607bca78abbd11df2991a9.png";
  return (
    <Modalcontainer toggle={modalDisplayOn}>
      <ModalBackground>
        <Modal>
          <div className="modal-title-box">
            <div>거래 유형을 선택해 주세요.</div>
          </div>
          <ModalType
            bgColor={bgColor === "전체"}
            selected={typeSelect === "전체"}
            onMouseDown={() => setBgColor("전체")}
            onMouseUp={() => setBgColor("")}
            onMouseLeave={() => setBgColor("")}
            onClick={() => {
              setTypeSelect("전체");
            }}
          >
            <div className="blank-check">
              {typeSelect === "전체" && <img alt="선택" src={SelectedImgSrc} />}
            </div>
            전체
          </ModalType>
          <ModalType
            bgColor={bgColor === "월세"}
            selected={typeSelect === "월세"}
            onMouseDown={() => setBgColor("월세")}
            onMouseUp={() => setBgColor("")}
            onMouseLeave={() => setBgColor("")}
            onClick={() => {
              setTypeSelect("월세");
            }}
          >
            <div className="blank-check">
              {typeSelect === "월세" && <img alt="선택" src={SelectedImgSrc} />}
            </div>
            월세
          </ModalType>
          <ModalType
            bgColor={bgColor === "전세"}
            selected={typeSelect === "전세"}
            onMouseDown={() => setBgColor("전세")}
            onMouseUp={() => setBgColor("")}
            onMouseLeave={() => setBgColor("")}
            onClick={() => {
              setTypeSelect("전세");
            }}
          >
            <div className="blank-check">
              {typeSelect === "전세" && <img alt="선택" src={SelectedImgSrc} />}
            </div>
            전세
          </ModalType>
          <div className="modal-submit">
            <button
              className="modal-submit-btn"
              onMouseDown={() => setSubmitMouseDown(true)}
              onMouseUp={() => setSubmitMouseDown(false)}
              onClick={() => {
                setModalDisplayOn(false);
                setSaleType(typeSelect);
              }}
              style={
                submitMouseDown
                  ? { backgroundColor: "rgb(200, 130, 100)" }
                  : { backgroundColor: "rgb(250, 149, 11)" }
              }
            >
              확인
            </button>
          </div>
        </Modal>
      </ModalBackground>
    </Modalcontainer>
  );
};

export default Modalwrapper;

const Modalcontainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 600;
  left: 0;
  top: 0;
  opacity: ${(props) => (props.toggle ? 1 : 0)};
  transition: 0.4s 0s ease-in-out;
  visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
`;
const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  width: 296px;
  border-radius: 4px;

  .modal-title-box {
    padding: 20px 13px 10px;
    div {
      line-height: 30px;
      font-size: 20px;
      text-align: center;
      font-weight: bold;
    }
  }

  .modal-submit {
    padding: 13px;
    .modal-submit-btn {
      color: white;
      width: 100%;
      height: 100%;
      outline: none;
      min-height: 40px;
      border: none;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
const ModalType = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eeeeee;
  padding: 13px;
  background-color: ${(props) => (props.bgColor === true ? "#EEEEEE" : "")};
  cursor: pointer;
  .blank-check {
    border-radius: 100%;
    border: 1.5px solid rgba(151, 151, 151, 0.8);
    width: 20px;
    height: 20px;
    margin-right: 9px;
    outline: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => (props.selected ? "none" : "")};
    img {
      position: absolute;
      width: 24px;
      height: 24px;
    }
  }
`;
