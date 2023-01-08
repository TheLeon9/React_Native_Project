import styled from 'styled-components/native';

// -------------------------+
//                          |
//         Card Galerie     |
//                          |
// -------------------------+

export const AbsoluteBackground = styled.View`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
`;
export const Card = styled.View`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
`;
export const ImageDiv = styled.View`
  width: 150px;
  height: 110px;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: blue;
  border: solid 2px ${props => props.theme.first_color};
`;
export const SeeMoreDiv = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50px;
  bottom: 10px;
  right: 10px;
`;
export const Logo = styled.Image`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;
