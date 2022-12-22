import styled from 'styled-components/native';

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
  background-color: ${props => props.theme.background_color};
`;
export const AbsoluteCircle = styled.View`
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
