import React from 'react';
import Navigation_Route from './src/config/route';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/config/style/theme';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation_Route />
      <FlashMessage position="top" />
    </ThemeProvider>
  );
};
export default App;
