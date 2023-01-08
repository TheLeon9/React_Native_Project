import React, {useRef} from 'react';
import Span from '../Span';
import {Animated, PanResponder, Easing} from 'react-native';

import {
  ProfileContRectangle,
  ProfileCont,
  Logo,
  AbsoluteBackground,
  AroundText,
  AroundTextCont,
  Description,
  AbsoluteX,
  LogoutCont,
  LogoutContAnimation,
  LogoutContText,
  ActiveLogOut,
  LogoAnimate,
  LogoAnimateDiv,
} from './style/Profil';
import LogoPower from '../../../assets/img/galerie_page/power.png';
import UserCircle from '../../../assets/img/galerie_page/user-circle.png';
import Arrow from '../../../assets/img/galerie_page/arrow-right-circle.png';
import Profil_Text from './Profil_text/';
import {Profil_Background} from '../../../assets/img/galerie_page/galerie_background';
import CloseImg from '../../../assets/img/galerie_page/x.png';

const Profil = ({
  usernameCo,
  passwordCo,
  profilIsOpen,
  profilSetIsOpen,
  galerySetIsOpen,
  navigation,
}) => {
  // voir ou mettre le if pour pas que fleche aille en arrière etc..
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.moveX > 200 && gestureState.moveX < 250) {
          navigation.navigate('Login');
        }
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const ScaleUserLogo = useRef(new Animated.Value(100)).current;
  const ToRightUserLogo = useRef(new Animated.Value(0)).current;
  const ToTopUserLogo = useRef(new Animated.Value(0)).current;
  const closeProfil = async () => {
    if (profilIsOpen) {
      Animated.timing(ScaleUserLogo, {
        toValue: 52,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(ToRightUserLogo, {
        toValue: 252,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(ToTopUserLogo, {
        toValue: -26,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      await delay(550);
      profilSetIsOpen(false);
      galerySetIsOpen(true);
    }
  };
  return (
    <ProfileCont>
      <AbsoluteX onPress={() => closeProfil()}>
        <Logo size="50" source={CloseImg} />
      </AbsoluteX>
      <AbsoluteBackground>
        <Profil_Background />
      </AbsoluteBackground>
      <ProfileContRectangle>
        <LogoAnimateDiv style={{left: ToRightUserLogo, top: ToTopUserLogo}}>
          <LogoAnimate
            source={UserCircle}
            style={{width: ScaleUserLogo, height: ScaleUserLogo}}
          />
        </LogoAnimateDiv>
        <Profil_Text span="Username :" p={usernameCo} />
        <Profil_Text span="PassWord :" p={passwordCo} />
        <Profil_Text span="Title :" p="DIEU" />
        <Profil_Text span="Age :" p="UNDEFINE" />
        <AroundTextCont>
          <AroundText>
            <Span font_size={18}>Description :</Span>
          </AroundText>
        </AroundTextCont>
        <Description font_size={18}>
          LOREM IPSUM dolor sit RONALDO MEILLEUR JOUEUR du mundo league des
          legens meilleur jeu au monde pc, apres bon y a de tres bon jeu aussi
          sur console QUE DIJE EXCELLENT MêME ! !
        </Description>
        <LogoutCont>
          <LogoutContAnimation
            style={{
              transform: [{translateX: pan.x}, {translateY: 0}],
            }}
            {...panResponder.panHandlers}>
            <ActiveLogOut>
              <Span font_size={18}>GRAB TO</Span>
              <Logo size="30" source={Arrow} />
            </ActiveLogOut>
          </LogoutContAnimation>
          <LogoutContText>
            <Span font_size={18}>LOGOUT</Span>
            <Logo size="30" source={LogoPower} />
          </LogoutContText>
        </LogoutCont>
      </ProfileContRectangle>
    </ProfileCont>
  );
};
export default Profil;
