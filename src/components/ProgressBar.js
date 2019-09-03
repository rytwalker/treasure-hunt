import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
import styled from "styled-components";

const ProgressBar = ({ progress, sidebar }) => {
  const props = useSpring({ x: 100, from: { x: 0 } });

  return (
    <StyledProgressBar sidebar={sidebar} widthprop={props.x.interpolate}>
      <animated.svg
        // style={props}
        viewBox="0 0 400 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="progress-bar"
          // width="100%"
          // height="12"
          rx="6"
          fill="#F5F5F5"
        />
        <rect className="progress-bar-fill" height="15" rx="6" fill="#3B3F3F" />
      </animated.svg>
      {/* <div className="progress-bar">
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            transition: 'width .2s ease-in-out'
          }}
          className="progress-bar-fill"
        />
      </div> */}
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div`
  margin-top: ${props => (props.sidebar ? "0" : "2rem")};
  .progress-bar {
    height: 15px;
    width: 100%;
    /* border-radius: 10px; */
    /* border: 2px solid #7dcdbe; */
    background: #f5f5f5;
    overflow: hidden;

  }
    .progress-bar-fill {
      width: ${props => props.widthprop(x => x + "%")};
      /* color: red; */
      /* background: ${props => (props.sidebar ? "#f3f3f3" : "#7dcdbe")}; */
    }
  .progress-bar-text {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default ProgressBar;
