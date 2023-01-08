import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import React from 'react';
import {Text} from 'react-native';

// -------------------------+
//                          |
//         Page Home        |
//                          |
// -------------------------+

export const SafeAreaViewDivHome = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${props => props.theme.black_color};
`;
export const GlobalLayerHome = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: ${props => props.theme.background_color};
`;
export const AbsoluteCircle = styled(Animated.View)`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-left: ${props => props.midsize}px;
  margin-top: ${props => props.midsize}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
export const DescriptionCont = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 20px;
  top: 0%;
  left: 0%;
`;
export const DescriptionHyphenText = styled.View`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DescriptionHyphen = styled.View`
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
export const DescriptionText = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
export const Description = ({children, font_size}) => {
  const themeGlobal = useContext(ThemeContext);
  return (
    <Text
      style={{
        fontFamily: themeGlobal.first_font,
        color: themeGlobal.white_color,
        fontSize: font_size,
        textAlign: 'justify',
        lineHeight: 40,
        paddingVertical: 20,
      }}>
      {children}
    </Text>
  );
};
