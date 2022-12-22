import React from 'react';

import {BoutonCercle, Logo} from './style/Bouton_power';

import LogoPower from '../../../assets/img/home_img/power.png';

const BoutonCercleDiv = ({navigation}) => {
  const login = () => {
    // animation
    navigation.navigate('Login');
  };
  return (
    <BoutonCercle onPress={() => login()}>
      <Logo source={LogoPower} size="62" />
    </BoutonCercle>
  );
};

export default BoutonCercleDiv;
