import React, {useState, useEffect} from 'react';
import Title from '../Title/';
import P from '../P/';
import Button_Login from './Bouton_login/';
import {
  Square,
  TextInputStyle,
  RememberMe,
  TextInputDiv,
  LogoTextInput,
} from './style/Form_login';
import CheckBox from '@react-native-community/checkbox';
import Lock from '../../../assets/img/login_img/lock.png';
import User from '../../../assets/img/login_img/user.png';

const Form = ({navigation}) => {
  const [username, setUsername] = useState('The_Leon');
  const [password, setPassword] = useState('Aucune Idée');
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
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
      <Button_Login
        navigation={navigation}
        username={username}
        password={password}
      />
      <P font_size={12}>FORGET PASSWORD ?</P>
    </Square>
  );
};

export default Form;
