"use client";
import { useState, useEffect } from "react";

const FixedButton = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Här kontrollerar vi om knappen ska försvinna när sektionen närmar sig
        if (entry.isIntersecting) {
          setIsHidden(true); // Knappen försvinner när sektionen "nuddar"
        } else {
          setIsHidden(false); // Knappen kommer tillbaka när den är längre bort
        }
      },
      {
        root: null, // Observerar i förhållande till viewporten
        threshold: 0, // Triggerar när någon del av sektionen är synlig
        rootMargin: '0px 0px -70% 0px', // Justerar för att trigga när sektionen närmar sig knappen (kan justeras för att passa)
      }
    );

    const section = document.getElementById("projects-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <a
      href="mailto:tbjorklind@gmail.com"
      className={`fixed top-30 right-30 text-2xl transition-opacity duration-300 ease-in-out ${
        isHidden ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      Get in touch!
    </a>
  );
};

export default FixedButton;
