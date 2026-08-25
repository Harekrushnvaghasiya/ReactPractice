import React, { useEffect, useMemo, useRef } from "react";
import { LogoProps } from "../../utils/appType";
import {
  ClientLogo,
  LogoSectionInner,
  LogoSectionWrapper,
  LogoTrack,
} from "./style";
import Image from "../image";

const LogoSection: React.FC<LogoProps> = ({ logos }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeLogos = useMemo(() => [...logos, ...logos], [logos]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateWidth = () => {
      const halfWidth = track.scrollWidth / 2;
      track.style.setProperty("--marquee-distance", `${halfWidth}px`);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [marqueeLogos]);

  return (
    <LogoSectionWrapper>
      <LogoTrack ref={trackRef}>
        {marqueeLogos.map((logo, index) => (
          <LogoSectionInner key={`${logo.title}-${index}`}>
            <ClientLogo>
              <Image
                className="client-logo"
                src={logo.url}
                alt={logo.title ?? ""}
              />
            </ClientLogo>
          </LogoSectionInner>
        ))}
      </LogoTrack>
    </LogoSectionWrapper>
  );
};

export default LogoSection;