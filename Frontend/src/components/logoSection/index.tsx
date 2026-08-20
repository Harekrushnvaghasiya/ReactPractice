import React from 'react'
import { LogoProps } from "../../utils/appType";
import { ClientLogo, LogoSectionInner, LogoSectionWrapper, LogoTrack } from './style';

const LogoSection: React.FC<LogoProps> = ({ logos }) => {
  return (
    <LogoSectionWrapper>
      <LogoTrack>
        {[...logos, ...logos].map((logo, index) => (
          <LogoSectionInner key={`${logo.title}-${index}`}>
            <ClientLogo>
              <img src={logo.url} alt={logo.title ?? ""} />
            </ClientLogo>
          </LogoSectionInner>
        ))}
      </LogoTrack>
    </LogoSectionWrapper>
  );
};

export default LogoSection; 