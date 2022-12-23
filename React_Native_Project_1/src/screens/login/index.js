import React from 'react';
import Form from '../../components/Form_login/';
import {
  SafeAreaViewDiv,
  GlobalImg,
  GlobalLayer,
  SquareCont,
  AbsoluteSquare,
} from './style/login';

import Fond_ecran from '../../../assets/img/fond_ecran.jpg';

import {Login_Square_Background} from '../../../assets/img/login_img/login_background';

const Login_Screen = ({navigation}) => {
  return (
    <SafeAreaViewDiv>
      <GlobalImg source={Fond_ecran}>
        <GlobalLayer>
          <SquareCont>
            <AbsoluteSquare>
              <Login_Square_Background />
            </AbsoluteSquare>
            <Form navigation={navigation} />
          </SquareCont>
        </GlobalLayer>
      </GlobalImg>
    </SafeAreaViewDiv>
  );
};

export default Login_Screen;
