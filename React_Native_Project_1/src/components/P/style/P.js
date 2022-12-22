import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import React from 'react';
import {Text} from 'react-native';

// -------------------------+
//                          |
//         Span            |
//                          |
// -------------------------+
export const PText = ({children, font_size}) => {
  const themeGlobal = useContext(ThemeContext);
  return (
    <Text
      style={{
        fontFamily: themeGlobal.first_font,
        color: themeGlobal.white_color,
        fontSize: font_size,
      }}>
      {children}
    </Text>
  );
};
