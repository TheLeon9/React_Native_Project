import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import React from 'react';
import {Text} from 'react-native';

// -------------------------+
//                          |
//         Span            |
//                          |
// -------------------------+
export const SpanText = ({children, size}) => {
  const themeGlobal = useContext(ThemeContext);
  return (
    <Text
      style={{
        fontFamily: themeGlobal.first_font,
        color: themeGlobal.second_color,
        fontSize: size,
      }}>
      {children}
    </Text>
  );
};
