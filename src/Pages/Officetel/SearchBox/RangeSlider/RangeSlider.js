import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LeftPosition = (leftValue, rightValue, max) => {
  console.log(leftValue, rightValue);
  const value = Math.min(parseInt(leftValue), parseInt(rightValue) - 1);
  const percent = (value / max) * 100;
  return percent + "%";
};

const RightPosition = (rightValue, leftValue, max) => {
  const value = Math.max(parseInt(leftValue) + 1, parseInt(rightValue));
  const percent = (value / max) * 100;
  return 100 - percent + "%";
};

const RangeSlider = ({
  val,
  range,
  max,
  setRange,
  setRangeLive,
  pointValue,
  resetRange,
}) => {
  // const [leftValues, setLeftValues] = useState(0);
  // const [rightValues, setRightValues] = useState(30);
  const [leftRange, setLeftRange] = useState("0%");
  const [rightRange, setRightRange] = useState("0%");

  useEffect(() => {
    setLeftRange("0%");
    setRightRange("0%");
  }, [resetRange]);
  return (
    <DepositRange>
      <div className="range-slider">
        <input
          type="range"
          min="0"
          max={max}
          step="1"
          value={range[val][0]}
          className="leftThumb"
          onMouseUp={(e) => {
            setRange({
              ...range,
              [val]: [
                Math.round(
                  (parseInt(
                    LeftPosition(
                      parseInt(e.target.value),
                      parseInt(range[val][1]),
                      max
                    )
                  ) /
                    100) *
                    max
                ),
                +range[val][1],
              ],
            });
          }}
          onInput={(e) => {
            setLeftRange(
              LeftPosition(
                parseInt(e.target.value),
                parseInt(range[val][1]),
                max
              )
            );
            setRangeLive({
              ...range,
              [val]: [
                Math.round(
                  (parseInt(
                    LeftPosition(
                      parseInt(e.target.value),
                      parseInt(range[val][1]),
                      max
                    )
                  ) /
                    100) *
                    max
                ),
                +range[val][1],
              ],
            });
          }}
        />
        <input
          type="range"
          min="0"
          max={max}
          step="1"
          value={range[val][1]}
          className="rightThumb"
          onMouseUp={(e) =>
            setRange({
              ...range,
              [val]: [
                +range[val][0],
                Math.round(
                  ((100 -
                    parseInt(
                      RightPosition(
                        parseInt(e.target.value),
                        parseInt(range[val][0]),
                        max
                      )
                    )) /
                    100) *
                    max
                ),
              ],
            })
          }
          onInput={(e) => {
            setRightRange(
              RightPosition(
                parseInt(e.target.value),
                parseInt(range[val][0]),
                max
              )
            );
            setRangeLive({
              ...range,
              [val]: [
                +range[val][0],
                Math.round(
                  ((100 -
                    parseInt(
                      RightPosition(
                        parseInt(e.target.value),
                        parseInt(range[val][0]),
                        max
                      )
                    )) /
                    100) *
                    max
                ),
              ],
            });
          }}
        />
        <div className="track"></div>
        <div
          className="range"
          style={{
            left: leftRange,
            right: rightRange,
          }}
        ></div>
        <div
          className="thumb left"
          style={{
            left: leftRange,
          }}
        ></div>
        <div
          className="thumb right"
          style={{
            right: rightRange,
          }}
        ></div>
      </div>
      <div className="range-point">
        <div className="range-point-text">{pointValue.slice(0, 2)}</div>
        <div className="range-point-text">{pointValue.slice(2, 5)}</div>
        <div className="range-point-text">{pointValue.slice(5, 9)}</div>
        <div className="range-point-text">{pointValue.slice(9)}</div>
      </div>
    </DepositRange>
  );
};

export default RangeSlider;

const DepositRange = styled.div`
  .range-slider {
    position: relative;
    width: 283px;
    height: 34px;
    margin: 0 auto;
    input {
      position: absolute;
      width: 317px;
      /* top: 50%; */
      /* transform: translate(-50%, -50%); */
      z-index: 5;
      pointer-events: none;
      appearance: none;
      opacity: 0;
      height: 4px;
      top: 50%;
      left: 50%;
      cursor: grab;
      transform: translate(-50%, -50%);
    }
    input[type="range"]::-webkit-slider-thumb {
      pointer-events: all;
      appearance: none;
      width: 34px;
      height: 34px;
    }
    .leftThumb::-webkit-slider-thumb {
      transform: translateX(-10%);
    }
    .rightThumb::-webkit-slider-thumb {
      transform: translateX(10%);
    }

    .track {
      user-select: none;
      width: 283px;
      height: 4px;
      background-color: #bbbbbb;
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      border-radius: 6px;
      transform: translate(-50%, -50%);
    }
    .range {
      user-select: none;
      position: absolute;
      background-color: #444444;
      height: 4px;
      top: 50%;
      z-index: 2;
      transform: translateY(-50%);
    }
    .thumb {
      user-select: none;
      position: absolute;
      border-radius: 100%;
      height: 34px;
      width: 34px;
      z-index: 4;
      background-image: url("https://s.zigbang.com/www/images/ic_btn_handle_34x34_nor_white.png");
      background-size: 34px;
    }
    .left {
      transform: translateX(-60%);
    }
    .right {
      transform: translateX(60%);
    }
  }
  .range-point {
    display: flex;
    width: 302px;
    margin: 0 auto;
    justify-content: space-between;
    &-text {
      font-size: 10px;
      font-weight: 400;
      color: #757575;
      position: relative;
      top: 1px;

      &::before {
        content: "";
        height: 5px;
        width: 1px;
        background-color: #e1e1e1;
        display: block;
        text-align: center;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
