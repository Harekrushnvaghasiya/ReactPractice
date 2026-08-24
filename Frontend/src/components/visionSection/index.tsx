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
import Image from "../image";

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
          <Image
            className="vision-image"
            src={leftImage}
            alt=""
            height={"auto"}
            width={"auto"}
            objectFit="cover"
            borderRadius="8px"
          />
          <Image
            className="vision-image"
            src={rightImage}
            alt=""
            height={"auto"}
            width={"auto"}
            objectFit="cover"
            borderRadius="8px"
          />
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
