import styled from 'styled-components/native';

// -------------------------+
//     Img Left and Right   |
//         Container        |
//                          |
// -------------------------+

export const ContainerImg = styled.View`
  height: 100%;
  width: 50%;
`;

export const ImageBackgroundDiv = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const ImgGaucheLayer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background_color};
  display: flex;
  align-items: flex-end;
`;
export const ImgDroiteLayer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background_color};
  display: flex;
  align-items: flex-start;
`;
