"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
  position: relative;
`;

const StickySection = styled.div`
  position: sticky;
  top: 30%;
  height: 300px; /* Justerar så att den yttre diven är lika hög som korten */
  overflow: hidden;
`;

const HorizontalContainer = styled.div<{ translateX: number }>`
  display: flex;
  height: 100%;
  will-change: transform;
  transform: translateX(${(props) => props.translateX}px);
  transition: transform 0.1s ease-out;
  justify-content: flex-start; /* Se till att korten börjar på vänster sida */
`;

const Card = styled.div`
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  min-width: 600px; /* Korten kommer vara 600px breda */
  height: 300px; /* Korten kommer vara 300px höga */
  margin-right: 50px;
  display: flex;
  font-size: 24px;

  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

const CV: React.FC = () => {
  const [dynamicHeight, setDynamicHeight] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  // Beräkna containerns höjd: kortens höjd (300px) + horisontellt scrollutrymme
  useEffect(() => {
    const calculateHeight = () => {
      if (outerRef.current && innerRef.current) {
        const totalScroll = innerRef.current.scrollWidth - window.innerWidth;
        const outerHeight = 300 + totalScroll;
        setDynamicHeight(outerHeight);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  // Översätt den vertikala scrollen till horisontell rörelse med start- och slut-offset
  useEffect(() => {
    const handleScroll = () => {
      if (outerRef.current && innerRef.current) {
        const scrollY = window.scrollY - outerRef.current.offsetTop;
        // Använd 300px (kortens höjd) istället för window.innerHeight här
        const maxScroll = outerRef.current.scrollHeight - 300;
        const maxTranslate = innerRef.current.scrollWidth - window.innerWidth;

        // Justera start- och slut-offset enligt dina önskemål
        const startOffset = 0; // Scroll-effekten startar efter 50px
        const endOffset = maxScroll; // Kan justeras vid behov

        let translateValue = 0;
        if (scrollY < startOffset) {
          translateValue = 0;
        } else if (scrollY > endOffset) {
          translateValue = -maxTranslate;
        } else {
          const normalized =
            (scrollY - startOffset) / (endOffset - startOffset);
          translateValue = -normalized * maxTranslate;
        }
        setTranslateX(translateValue);
      }
    };

    const handleScrollWithRAF = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollWithRAF);
    return () => {
      window.removeEventListener("scroll", handleScrollWithRAF);
    };
  }, []);

  const cvSection = [
    {
      title: "Teacher Assistant",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2017-2019",
    },
    {
      title: "Waitress",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2022",
    },
    {
      title: "Teacher Assistant",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2017-2019",
    },
    {
      title: "Waitress",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2022",
    },
    {
      title: "Teacher Assistant",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2017-2019",
    },
    {
      title: "Waitress",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2022",
    },
    {
      title: "Teacher Assistant",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2017-2019",
    },
    {
      title: "Waitress",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      year: "2022",
    },
    {
      title: " ",
      text: "  ",
      year: "  ",
    },
    {
      title: " ",
      text: "  ",
      year: "  ",
    },
    // Fler jobb här...
  ];

  return (
    <Container ref={outerRef} height={dynamicHeight}>
      <StickySection>
        <HorizontalContainer ref={innerRef} translateX={translateX}>
          {cvSection.map((job, index) => (
            <Card key={index}>
              <h2 className="text-4xl mb-4">{job.title}</h2>
              <p>{job.text}</p>
              <h1 className="text-7xl text-right">{job.year}</h1>
            </Card>
          ))}
        </HorizontalContainer>
      </StickySection>
    </Container>
  );
};

export default CV;
