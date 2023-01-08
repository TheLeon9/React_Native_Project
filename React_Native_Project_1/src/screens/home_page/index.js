import React, {useRef, useState, useEffect} from 'react';
import Home_page_Left from '../../components/ImgLeft_ImgRight_Cont/index_left';
import Home_page_Right from '../../components/ImgLeft_ImgRight_Cont/index_right';
import BoutonCercleDiv from '../../components/Bouton_power';
import {Animated, Easing, ActivityIndicator} from 'react-native';
import P from '../../components/P/';
import Span from '../../components/Span/';
import {
  SafeAreaViewDivHome,
  GlobalLayerHome,
  AbsoluteCircle,
  Description,
  DescriptionCont,
  DescriptionHyphenText,
  DescriptionHyphen,
  DescriptionText,
} from './style/home_page';

import {
  BigCercle,
  LittleCercle,
  MiddleCercle,
} from '../../../assets/img/home_img/home_img.js';

const Home_page = ({navigation}) => {
  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      // ici
    });
    return focusHandler;
  }, [navigation]);
  const [isOpen, setIsOpen] = useState(false);
  const MarginLeftCircleBig = useRef(new Animated.Value(-102)).current;
  const MarginLeftCircleMid = useRef(new Animated.Value(-90)).current;
  const MarginLeftCircleLit = useRef(new Animated.Value(-80)).current;
  const RotateBig = useRef(new Animated.Value(0)).current;
  const RotateMid = useRef(new Animated.Value(0)).current;
  const RotateLit = useRef(new Animated.Value(0)).current;
  if (isOpen) {
    Animated.timing(MarginLeftCircleBig, {
      toValue: 400,
      duration: 3200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(MarginLeftCircleMid, {
      toValue: 400,
      duration: 3100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(MarginLeftCircleLit, {
      toValue: 400,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }
  if (!isOpen) {
    Animated.loop(
      Animated.timing(RotateBig, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
    Animated.loop(
      Animated.timing(RotateMid, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
    Animated.loop(
      Animated.timing(RotateLit, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }
  if (isOpen) {
    Animated.timing(RotateBig, {}).stop();
    Animated.timing(RotateMid, {}).stop();
    Animated.timing(RotateLit, {}).stop();
  }
  const Rotate = RotateBig.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const RotateMiddle = RotateMid.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const RotateLittle = RotateLit.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <SafeAreaViewDivHome>
      <GlobalLayerHome>
        <DescriptionCont>
          <Description font_size={24}>
            Hello dear visitor, Welcome to the official :
          </Description>
          <Span font_size={32}>"The_Leon Gallery"</Span>
          <Description font_size={24}>
            You will soon be redirected to the login, have a safe visit !! ^^
          </Description>
          <ActivityIndicator size="large" color="deepskyblue" />
          <DescriptionHyphenText>
            <DescriptionHyphen>
              <P font_size={24}>- </P>
              <P font_size={24}>- </P>
              <P font_size={24}>- </P>
              <P font_size={24}>- </P>
              <P font_size={24}>- </P>
              <P font_size={24}>- </P>
              <P font_size={24}>- </P>
            </DescriptionHyphen>
            <DescriptionText>
              <P font_size={24}>Bienvenue</P>
              <P font_size={24}>Bem-vindo</P>
              <P font_size={24}>Bienvenidos</P>
              <P font_size={24}>Benvenuto</P>
              <P font_size={24}>ようこそ ( Yōkoso )</P>
              <P font_size={24}>欢迎 ( Huānyíng )</P>
              <P font_size={24}>환영하다 ( hwan-yeonghada )</P>
            </DescriptionText>
          </DescriptionHyphenText>
        </DescriptionCont>
        <AbsoluteCircle
          midsize="-102"
          size="204"
          style={{
            transform: [{rotate: Rotate}],
            marginLeft: MarginLeftCircleBig,
          }}>
          <BigCercle />
        </AbsoluteCircle>
        <AbsoluteCircle
          midsize="-90"
          size="180"
          style={{
            transform: [{rotate: RotateMiddle}],
            marginLeft: MarginLeftCircleMid,
          }}>
          <MiddleCercle />
        </AbsoluteCircle>
        <AbsoluteCircle
          midsize="-80"
          size="160"
          style={{
            transform: [{rotate: RotateLittle}],
            marginLeft: MarginLeftCircleLit,
          }}>
          <LittleCercle />
        </AbsoluteCircle>
        <BoutonCercleDiv
          navigation={navigation}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <Home_page_Left isOpen={isOpen} />
        <Home_page_Right isOpen={isOpen} />
      </GlobalLayerHome>
    </SafeAreaViewDivHome>
  );
};

export default Home_page;
