import React from 'react'
import { LogoProps } from "../../utils/appType";
import { ClientLogo, LogoSectionInner, LogoSectionWrapper, LogoTrack } from './style';
import Image from '../image';

const LogoSection: React.FC<LogoProps> = ({ logos }) => {
  return (
    <LogoSectionWrapper>
      <LogoTrack>
        {[...logos, ...logos].map((logo, index) => (
          <LogoSectionInner key={`${logo.title}-${index}`}>
            <ClientLogo>
              <Image
                src={logo.url}
                alt={logo.title ?? ""}
                width= {'auto'}
                height ={32}
                objectFit='contain'
                className='client-logo'
                />
 
            </ClientLogo>
          </LogoSectionInner>
        ))}
      </LogoTrack>
    </LogoSectionWrapper>
  );
};

export default LogoSection; 