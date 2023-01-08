import styled from 'styled-components/native';
import {Animated} from 'react-native';

// -------------------------+
//     Img Left and Right   |
//         Container        |
//                          |
// -------------------------+

export const ContainerImgLeft = styled(Animated.View)`
  height: 100%;
  width: 50%;
`;
export const ContainerImgRight = styled(Animated.View)`
  height: 100%;
  width: 50%;
`;

export const ImageBackgroundDiv = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const ImgLeftLayer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background_color};
  display: flex;
  align-items: flex-end;
`;
export const ImgRightLayer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background_color};
  display: flex;
  align-items: flex-start;
`;
