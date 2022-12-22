import styled from 'styled-components/native';

// -------------------------+
//                          |
//        Form Login        |
//                          |
// -------------------------+

export const Square = styled.View`
  width: 190px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BoutonDiv = styled.View`
  width: 190px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BoutonDivImg = styled.ImageBackground`
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Bouton = styled.TouchableOpacity`
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RememberMe = styled.View`
  width: 190px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextInputDiv = styled.View`
  height: 40px;
  position: relative;
  margin-top: 10px;
`;
export const TextInputStyle = styled.TextInput`
  width: 180px;
  padding: 0 34px;
  height: 40px;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.first_color};
  color: ${props => props.theme.second_color};
  font-size: ${props => props.theme.font_size};
`;
export const LogoTextInput = styled.Image`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: absolute;
  top: 10%;
  left: 0;
`;
