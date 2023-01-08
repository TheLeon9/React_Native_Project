import styled from 'styled-components/native';

// -------------------------+
//                          |
//         Page 3D          |
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
export const Cont3D = styled.View`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.background_color};
`;
export const GoBack = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.black_color};
  border: 2px solid ${props => props.theme.first_color};
`;
