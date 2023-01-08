import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaViewDiv,
  GlobalImg,
  GlobalLayer,
  GalerieCont,
  AbsoluteProfilButtonDiv,
  ProfilButton,
  LogoAnimate,
  CardCont,
} from './style/galerie_page';
import Fond_ecran from '../../../assets/img/fond_ecran.jpg';
import {showMessage} from 'react-native-flash-message';
import Profil from '../../components/Profil';
import {Animated, Easing} from 'react-native';
import Title from '../../components/Title';
import CardComp from '../../components/Card';

import UserCircle from '../../../assets/img/galerie_page/user-circle.png';
const Galerie_Details = ({route, navigation}) => {
  const [profilIsOpen, profilSetIsOpen] = useState(true);
  const [galeryIsOpen, galerySetIsOpen] = useState(false);
  useEffect(() => {
    showMessage({
      message: 'Welcome THE_LEON',
      description: 'Your connection succeed',
      type: 'default',
      backgroundColor: 'rgba(0, 0, 60, 0.80)',
      color: 'white',
      icon: 'info',
      position: 'right',
    });
  }, []);
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const ScaleUserLogo = useRef(new Animated.Value(52)).current;
  const ToLeftUserLogo = useRef(new Animated.Value(10)).current;
  const ToBottomUserLogo = useRef(new Animated.Value(10)).current;
  const closeGalery = async () => {
    if (galeryIsOpen) {
      Animated.timing(ScaleUserLogo, {
        toValue: 100,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(ToLeftUserLogo, {
        toValue: 262,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(ToBottomUserLogo, {
        toValue: 36,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      await delay(520);
      profilSetIsOpen(true);
      galerySetIsOpen(false);
    }
    if (profilSetIsOpen) {
      Animated.timing(ScaleUserLogo, {
        toValue: 52,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(ToLeftUserLogo, {
        toValue: 10,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(ToBottomUserLogo, {
        toValue: 10,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      await delay(550);
      profilSetIsOpen(true);
      galerySetIsOpen(false);
    }
  };
  return (
    <SafeAreaViewDiv>
      <GlobalImg source={Fond_ecran}>
        <GlobalLayer>
          {}
          {galeryIsOpen ? (
            <GalerieCont>
              <AbsoluteProfilButtonDiv
                style={{right: ToLeftUserLogo, top: ToBottomUserLogo}}>
                <ProfilButton onPress={() => closeGalery()}>
                  <LogoAnimate
                    source={UserCircle}
                    style={{width: ScaleUserLogo, height: ScaleUserLogo}}
                  />
                </ProfilButton>
              </AbsoluteProfilButtonDiv>
              <Title
                title="The_Leon Gallery"
                margin_top={60}
                font_size={40}
                padding_bot={0}
              />
              <CardCont>
                <CardComp navigation={navigation} />
              </CardCont>
            </GalerieCont>
          ) : null}
          {}
          {profilIsOpen ? (
            <Profil
              profilIsOpen={profilIsOpen}
              profilSetIsOpen={profilSetIsOpen}
              galerySetIsOpen={galerySetIsOpen}
              usernameCo={route.params.usernameCo}
              passwordCo={route.params.passwordCo}
              navigation={navigation}
            />
          ) : null}
        </GlobalLayer>
      </GlobalImg>
    </SafeAreaViewDiv>
  );
};

export default Galerie_Details;
