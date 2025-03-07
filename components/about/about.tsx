"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// OuterContainer får en dynamisk höjd baserat på antalet items * containerHeight
const OuterContainer = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
  position: relative;
`;

// StickySection är nu 60vh hög och centrerad vertikalt med top:20vh
const StickySection = styled.div`
  position: sticky;
  top: 20vh;
  height: 60vh;
  display: flex;
`;

// Vänstra kolumnen med en fast bild
const LeftColumn = styled.div`
  flex: 1;
  overflow: hidden;
`;

const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Högra kolumnen med vertikal karusell
const RightColumn = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

// Containern som förflyttar karusell-items vertikalt
const CarouselContainer = styled.div<{ translateY: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.2s ease-out;
  transform: translateY(${(props) => props.translateY}px);
`;

// Varje item har samma höjd som StickySection (60vh)
const CarouselItem = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: #ddd;
  border: 1px solid #ccc;
`;

interface VerticalCarouselProps {
  items: string[];
  containerHeight: number;
  outerRef: React.RefObject<HTMLDivElement>;
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items, containerHeight, outerRef }) => {
  const [translateY, setTranslateY] = useState(0);
  const totalHeight = containerHeight * items.length; // Totala höjden på alla items

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current) return;
      const offsetTop = outerRef.current.offsetTop;
      const scrollPos = window.scrollY - offsetTop;
      const maxTranslate = totalHeight - containerHeight; // Hur mycket vi kan förflytta
      const progress = Math.min(Math.max(scrollPos / maxTranslate, 0), 1);
      // Sätt translationen kontinuerligt
      setTranslateY(-progress * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerHeight, items.length, totalHeight, outerRef]);

  return (
    <CarouselContainer translateY={translateY}>
      {items.map((item, index) => (
        <CarouselItem key={index}>{item}</CarouselItem>
      ))}
    </CarouselContainer>
  );
};

const About: React.FC = () => {
  // Exempeldata: 5 items i karusellen
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Sätt containerHeight till 60% av viewport-höjden (60vh)
  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(window.innerHeight * 0.6);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Totala höjden på OuterContainer = antal items * containerHeight
  const totalHeight = containerHeight * items.length;

  return (
    <OuterContainer ref={outerRef} height={totalHeight}>
      <StickySection>
        <LeftColumn>
          {/* Ange sökvägen till din bild */}
          <LeftImage src="/path/to/your/image.jpg" alt="About Image" />
        </LeftColumn>
        <RightColumn>
          <VerticalCarousel items={items} containerHeight={containerHeight} outerRef={outerRef} />
        </RightColumn>
      </StickySection>
    </OuterContainer>
  );
};

export default About;
