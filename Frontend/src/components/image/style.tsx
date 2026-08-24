import styled from "styled-components";
import { ImageProps } from "../../utils/appType";

export const Imagediv = styled.img<ImageProps>`
  object-fit: ${(props) => props.objectFit || "cover"};
  border-radius: ${(ImgProps) => ImgProps.borderRadius || "0px"};
`;