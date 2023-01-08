import React, {useRef} from 'react';

import {BoutonCercle, Logo, BoutonPowerCont} from './style/Bouton_power';

import LogoPlay from '../../../assets/img/home_img/play.png';
import {Animated, Easing} from 'react-native';

const BoutonCercleDiv = ({navigation, setIsOpen}) => {
  const MarginLeft = useRef(new Animated.Value(-70)).current;
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const login = async () => {
    setIsOpen(true);
    if (setIsOpen) {
      Animated.timing(MarginLeft, {
        toValue: 200,
        duration: 1700,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      await delay(4000);
      navigation.navigate('Login');
    }
  };
  return (
    <BoutonPowerCont style={{marginLeft: MarginLeft}}>
      <BoutonCercle onPress={() => login()}>
        <Logo source={LogoPlay} size="62" />
      </BoutonCercle>
    </BoutonPowerCont>
  );
};

export default BoutonCercleDiv;
