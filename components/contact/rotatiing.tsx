"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #3498db;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.1s linear;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const ProgressRingSVG = styled.svg`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: #3498db;
  stroke-width: 5;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.1s linear;
`;

const ScrollRotatingButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const circumference = 220;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / docHeight;
      const rotation = scrollFraction * 360;
      const progress = circumference * (1 - scrollFraction);

      if (buttonRef.current) {
        buttonRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = String(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ButtonContainer>
      <ProgressRingSVG width="70" height="70">
        <ProgressCircle ref={circleRef} cx="35" cy="35" r="35" />
      </ProgressRingSVG>
      <StyledButton ref={buttonRef}>↻</StyledButton>
    </ButtonContainer>
  );
};

export default ScrollRotatingButton;
