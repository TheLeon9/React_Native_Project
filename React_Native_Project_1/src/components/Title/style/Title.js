import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import React from 'react';
import {Text} from 'react-native';

// -------------------------+
//                          |
//         Title            |
//                          |
// -------------------------+
export const H1 = ({size, children, padding_bot, margin_top}) => {
  const themeGlobal = useContext(ThemeContext);
  return (
    <Text
      style={{
        fontFamily: themeGlobal.first_font,
        color: themeGlobal.white_color,
        fontSize: size,
        paddingBottom: padding_bot,
        marginTop: margin_top,
      }}>
      {children}
    </Text>
  );
};
