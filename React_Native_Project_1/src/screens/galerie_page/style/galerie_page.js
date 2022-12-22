import styled from 'styled-components/native';

// -------------------------+
//                          |
//         Global           |
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

// -------------------------+
//                          |
//         Page Galerie     |
//                          |
// -------------------------+
