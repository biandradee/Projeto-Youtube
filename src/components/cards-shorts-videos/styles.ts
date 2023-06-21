import styled from "styled-components";

export const CardVideo = styled.div`
  min-width: 160px;
  min-height: 380px;
  max-width: 160px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
`;

export const ThumbnailShortVideo = styled.img`
  width: 100%;
  min-height: 280px;
  border-radius: 10px;
`;

export const TitleShortVideo = styled.span`
  color: black;
  font-weight: 600;
  font-size: 20px;
`;

export const DetailsShortVideo = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;