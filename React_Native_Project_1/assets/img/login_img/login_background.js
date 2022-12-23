import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml_Login_Square_Background = `
<svg width="300" height="360" viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 315.907L2 2L248.205 2L298 48.9962V358H55.6905L2 315.907Z" stroke="#00BFFF" stroke-width="4"/>
</svg>

`;
export const Login_Square_Background = () => (
  <SvgXml xml={xml_Login_Square_Background} width="100%" height="100%" />
);

const xml_Login_Button_Background_Good = `
<svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89 22.5945V1L14.4719 1L1 17.3588V39H73.077L89 22.5945Z" fill="#87CEFA" stroke="#00BFFF" stroke-width="2"/>
</svg>

`;
export const Login_Button_Background_Good = () => (
  <SvgXml xml={xml_Login_Button_Background_Good} width="100%" height="100%" />
);

const xml_Login_Button_Background_Not_Good = `
<svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89 1L14.4719 1L1 17.3588V39H73.077L89 22.5945V1Z" fill="white" stroke="#00BFFF" stroke-width="2"/>
</svg>
`;
export const Login_Button_Background_Not_Good = () => (
  <SvgXml
    xml={xml_Login_Button_Background_Not_Good}
    width="100%"
    height="100%"
  />
);
