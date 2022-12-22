import styled from 'styled-components/native';

// -------------------------+
//                          |
//         Page Profil     |
//                          |
// -------------------------+

export const ProfileCont = styled.View`
  position: relative;
  width: 350px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.first_color};
`;

export const ProfileContRectangle = styled.View`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: red;
`;
export const AroundTextCont = styled.View`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
export const AroundText = styled.View`
  height: 100%;
  background-color: blue;
`;

export const Logo = styled.Image`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;
