import styled from 'styled-components/native';
import {Animated} from 'react-native';

// -------------------------+
//                          |
//       Bouton Power       |
//                          |
// -------------------------+

export const BoutonPowerCont = styled(Animated.View)`
  z-index: 100;
  box-sizing: border-box;
  position: absolute;
  border-radius: 100px;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 140px;
  /* margin-left: -70px; */
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoutonCercle = styled.TouchableOpacity`
  border-radius: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.second_color};
  border: solid 4px ${props => props.theme.first_color};
`;
export const Logo = styled.Image`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;
