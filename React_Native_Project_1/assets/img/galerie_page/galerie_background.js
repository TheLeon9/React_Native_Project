import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml_Profil_Background = `
<svg width="340" height="700" viewBox="0 0 340 700" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L281.085 2L338 94.1611V698H63.3386L2 615.494L2 2Z" stroke="#00BFFF" stroke-width="4"/>
</svg>
`;
export const Profil_Background = () => (
  <SvgXml xml={xml_Profil_Background} width="100%" height="100%" />
);
const xml_Card_Background = `
<svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L165.182 2L198 34.2646V248H37.3796L2 219.107L2 2Z" fill="black" fill-opacity="0.5" stroke="#00BFFF" stroke-width="4"/>
</svg>
`;
export const Card_Background = () => (
  <SvgXml xml={xml_Card_Background} width="100%" height="100%" />
);
