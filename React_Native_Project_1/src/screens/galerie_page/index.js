import React, {useState, useRef} from 'react';
import {
  SafeAreaViewDiv,
  GlobalImg,
  GlobalLayer,
  GalerieCont,
  AbsoluteProfilButtonDiv,
  ProfilButton,
  LogoAnimate,
  CardCont,
  ModalView,
  ModalImage,
  BoutonCercle,
  LogoClose,
} from './style/galerie_page';
import {Modal} from 'react-native';
import Fond_ecran from '../../../assets/img/fond_ecran.jpg';
import {showMessage} from 'react-native-flash-message';
import Profil from '../../components/Profil';
import {Animated, Easing} from 'react-native';
import Title from '../../components/Title';
import CardComp from '../../components/Card';
import P from '../../components/P/';
import Span from '../../components/Span/';

import videoSinge from '../../../assets/videos/singe.mp4';
import videoCube from '../../../assets/videos/cube.mp4';
import videoTel from '../../../assets/videos/tel.mp4';
import videoTennis from '../../../assets/videos/tennis.mp4';

import LolImage from '../../../assets/img/galerie_page/Lol.jpg';
import imgSinge from '../../../assets/img/galerie_page/Card/Singe.png';
import imgCube from '../../../assets/img/galerie_page/Card/Cube.png';
import imgTennis from '../../../assets/img/galerie_page/Card/Tennis.png';
import imgTel from '../../../assets/img/galerie_page/Card/Tel.png';
import CloseImg from '../../../assets/img/galerie_page/x.png';

import UserCircle from '../../../assets/img/galerie_page/user-circle.png';
const Galerie_Details = ({route, navigation}) => {
  const [profilIsOpen, profilSetIsOpen] = useState(true);
  const [galeryIsOpen, galerySetIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const ShowMessage = async () => {
    showMessage({
      message: 'Welcome THE_LEON',
      description: 'Your connection succeed',
      type: 'default',
      backgroundColor: 'rgba(0, 0, 60, 0.80)',
      color: 'white',
      icon: 'info',
      position: 'right',
    });
    await delay(100);
    setModalVisible(!modalVisible);
  };
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <ModalView>
              <ModalImage source={LolImage} resizeMode="cover">
                <Span font_size={28}>PLAY LEAGUE OF LEGENDS</Span>
                <P font_size={24}>Free Game</P>
                <P font_size={24}>Custom Game up to 10</P>
                <P font_size={24}>Tryhard & Fun</P>
                <P font_size={24}>Play 'Solo' or in 'Team'</P>
                <P font_size={24}>1 to 5 Players</P>
                <Span font_size={28}>#ADD</Span>
                <BoutonCercle onPress={() => ShowMessage()}>
                  <LogoClose size="40" source={CloseImg} />
                </BoutonCercle>
              </ModalImage>
            </ModalView>
          </Modal>
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
              <CardCont contentContainerStyle={{alignItems: 'center'}}>
                <CardComp
                  navigation={navigation}
                  TitleCard="3D Cube"
                  CardDesc="Cube Make in 3D"
                  video={videoCube}
                  img={imgCube}
                />
                <CardComp
                  navigation={navigation}
                  TitleCard="Monkey"
                  CardDesc="Monkey Make in 3D"
                  video={videoSinge}
                  img={imgSinge}
                />
                <CardComp
                  navigation={navigation}
                  TitleCard="Phone"
                  CardDesc="Phone Make in 3D"
                  video={videoTel}
                  img={imgTel}
                />
                <CardComp
                  navigation={navigation}
                  TitleCard="Tennis Ball"
                  CardDesc="Tennis Ball Make in 3D"
                  video={videoTennis}
                  img={imgTennis}
                />
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
