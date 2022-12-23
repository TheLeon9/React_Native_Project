import React from 'react';
import P from '../../P/';
import Span from '../../Span/';
import {
  BoutonDiv,
  Bouton,
  BoutonDivImg,
  AbsoluteButtonSquare,
} from '../style/Form_login';
import {showMessage} from 'react-native-flash-message';
import {
  Login_Button_Background_Good,
  Login_Button_Background_Not_Good,
} from '../../../../assets/img/login_img/login_background';

const Button_Login = ({navigation, username, password}) => {
  const newUser = 'The_Leon';
  const newPassword = 'Aucune Idée';
  const ConnectionFailed = mot =>
    showMessage({
      message: 'Wrong ' + mot,
      description: "You don't have the good " + mot + ', please try again',
      type: 'default',
      backgroundColor: 'rgba(100, 0, 60, 0.80)',
      color: 'white',
      icon: 'danger',
      position: 'right',
    });
  const Cancel = () => {
    navigation.navigate('Home');
  };
  const Start = () => {
    if (username === newUser) {
      if (password === newPassword) {
        navigation.navigate('Galerie', {
          usernameCo: username,
          passwordCo: password,
        });
      } else {
        let mot = 'Password';
        ConnectionFailed(mot);
      }
    } else {
      let mot = 'Username';
      ConnectionFailed(mot);
    }
  };
  return (
    <BoutonDiv>
      <Bouton onPress={() => Cancel()}>
        <BoutonDivImg>
          <AbsoluteButtonSquare>
            <Login_Button_Background_Not_Good />
          </AbsoluteButtonSquare>
          <Span font_size={20}>CANCEL</Span>
        </BoutonDivImg>
      </Bouton>
      <Bouton onPress={() => Start()}>
        <BoutonDivImg>
          <AbsoluteButtonSquare>
            <Login_Button_Background_Good />
          </AbsoluteButtonSquare>
          <P font_size={20}>START</P>
        </BoutonDivImg>
      </Bouton>
    </BoutonDiv>
  );
};

export default Button_Login;
