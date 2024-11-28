import React from "react";
import styled from "styled-components";

// Tooltip Wrapper (툴팁을 감싸는 부모 요소)
const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 10px); /* 살짝 아래로 이동 */
  }
`;

// Tooltip Content (툴팁 내용)
const TooltipContent = styled.div`
  position: absolute;
  top: 50%; /* 부모 요소 아래에 위치 */
  left: 50%;
  transform: translate(-50%, 10px);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
  z-index: 10;

  /* 화살표 */
  &::after {
    content: "";
    position: absolute;
    top: -5px; /* 화살표의 위치 */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }
`;

// Tooltip Component
const CustomTooltip = ({ children, text }) => {
    return (
        <TooltipWrapper>
            {children} {/* 툴팁을 감싸는 컴포넌트 */}
            <TooltipContent className="tooltip">{text}</TooltipContent>
        </TooltipWrapper>
    );
};

export default CustomTooltip;