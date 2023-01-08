import styled from 'styled-components/native';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import React from 'react';
import {Text} from 'react-native';
import {Animated} from 'react-native';

export const Description = ({children, font_size}) => {
  const themeGlobal = useContext(ThemeContext);
  return (
    <Text
      style={{
        fontFamily: themeGlobal.first_font,
        color: themeGlobal.white_color,
        fontSize: font_size,
        marginTop: 10,
        textAlign: 'justify',
        lineHeight: 20,
      }}>
      {children}
    </Text>
  );
};

// -------------------------+
//                          |
//         Page Profil      |
//                          |
// -------------------------+

export const ProfileCont = styled.View`
  position: relative;
  width: 340px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AbsoluteBackground = styled.View`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
`;
export const ProfileContRectangle = styled.View`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AroundTextCont = styled.View`
  margin-top: 16px;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AroundText = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.first_color};
`;

export const AbsoluteX = styled.TouchableOpacity`
  z-index: 100;
  position: absolute;
  border-radius: 100px;
  right: 40px;
  top: 40px;
  height: 52px;
  width: 52px;
`;
export const LogoAnimateDiv = styled(Animated.View)`
  width: 120%;
  height: 100px;
  position: relative;
`;
export const LogoAnimate = styled(Animated.Image)`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100px;
  width: 100px;
`;
export const Logo = styled.Image`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;
export const LogoutCont = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LogoutContText = styled.View`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutContAnimation = styled(Animated.View)`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ActiveLogOut = styled.View`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
