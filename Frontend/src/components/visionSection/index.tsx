import React from "react";
import { VisionProps } from "../../utils/appType";
import {
  VisionContentWrapper,
  VisionDescription,
  VisionImageWrapper,
  VisionSection,
  VisionTag,
  VisionTitle,
  VisionWrapper,
} from "./style";
import Button from "../buttons";
import { isEmpty } from "../../helpers/common";

const OurVisionSection: React.FC<VisionProps> = ({
  leftImage,
  rightImage,
  tag,
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
}) => {
  const hasPrimaryButton =
    !isEmpty(primaryButtonLink) && !isEmpty(primaryButtonText);
  return (
    <VisionSection>
      <VisionWrapper>
        <VisionImageWrapper>
          <img src={leftImage} alt="" />
          <img src={rightImage} alt="" />
        </VisionImageWrapper>
        <VisionContentWrapper>
          <VisionTag>{tag}</VisionTag>
          <VisionTitle>{title}</VisionTitle>
          {!isEmpty(description) && (
            <VisionDescription>{description}</VisionDescription>
          )}
          {hasPrimaryButton && (
            <Button title={primaryButtonText} href={primaryButtonLink} />
          )}
        </VisionContentWrapper>
      </VisionWrapper>
    </VisionSection>
  );
};

export default OurVisionSection;
