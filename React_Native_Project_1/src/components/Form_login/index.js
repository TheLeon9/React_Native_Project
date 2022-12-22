import React, {useState} from 'react';
import Title from '../Title/';
import P from '../P/';
import {
  Square,
  TextInputStyle,
  RememberMe,
  BoutonDiv,
  Bouton,
  TextInputDiv,
  LogoTextInput,
  BoutonDivImg,
} from './style/Form_login';
import CheckBox from '@react-native-community/checkbox';
import Lock from '../../../assets/img/login_img/lock.png';
import User from '../../../assets/img/login_img/user.png';
import Button_Background from '../../../assets/img/login_img/bouton_div_img.png';
import {showMessage} from 'react-native-flash-message';

const Form = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
    if (username === 'oui') {
      if (password === 'oui') {
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
    <Square>
      <Title
        title="PLEASE CONNECT"
        margin_top={0}
        font_size={24}
        padding_bot={0}
      />
      <TextInputDiv>
        <LogoTextInput source={User} size="24" />
        <TextInputStyle
          onChangeText={setUsername}
          value={username}
          placeholder="USERNAME"
          placeholderTextColor="lightskyblue"
          keyboardType="default"
          fontFamily="Transformers Movie"
        />
      </TextInputDiv>
      <TextInputDiv>
        <LogoTextInput source={Lock} size="24" />
        <TextInputStyle
          onChangeText={setPassword}
          value={password}
          placeholder="PASSWORD"
          placeholderTextColor="lightskyblue"
          secureTextEntry={true}
          keyboardType="default"
          fontFamily="Transformers Movie"
        />
      </TextInputDiv>
      <RememberMe>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          tintColors={{true: 'deepskyblue', false: 'deepskyblue'}}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <P font_size={12}>REMEMBER ME</P>
      </RememberMe>
      <BoutonDiv>
        <Bouton onPress={() => Cancel()}>
          <BoutonDivImg source={Button_Background} resizeMode="stretch">
            <P font_size={20}>CANCEL</P>
          </BoutonDivImg>
        </Bouton>
        <Bouton onPress={() => Start()}>
          <BoutonDivImg source={Button_Background} resizeMode="stretch">
            <P font_size={20}>START</P>
          </BoutonDivImg>
        </Bouton>
      </BoutonDiv>
      <P font_size={12}>FORGET PASSWORD ?</P>
    </Square>
  );
};

export default Form;
