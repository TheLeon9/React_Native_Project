import styled from 'styled-components/native';
import {Animated} from 'react-native';

// -------------------------+
//                          |
//         Page Galerie     |
//                          |
// -------------------------+

export const SafeAreaViewDiv = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: black;
`;
export const GlobalImg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const GlobalLayer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background_color};
`;
export const GalerieCont = styled.View`
  width: 90%;
  height: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const CardCont = styled.ScrollView`
  width: 100%;
  margin-top: 10px;
`;

export const AbsoluteProfilButtonDiv = styled(Animated.View)`
  z-index: 100;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfilButton = styled.TouchableOpacity`
  border-radius: 100px;
  height: 100%;
  width: 100%;
`;
export const LogoAnimate = styled(Animated.Image)`
  height: 50px;
  width: 50px;
`;
