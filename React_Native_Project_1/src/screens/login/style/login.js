import styled from 'styled-components/native';

// -------------------------+
//                          |
//        Page Login        |
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

export const SquareCont = styled.ImageBackground`
  width: 300px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
