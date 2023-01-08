import React from 'react';
import {
  SafeAreaViewDiv,
  GlobalImg,
  GlobalLayer,
  GoBack,
  Cont3D,
} from './style/3d_page';

import Fond_ecran from '../../../assets/img/fond_ecran.jpg';
import P from '../../components/P';
import Span from '../../components/Span';

import Video from 'react-native-video';

import {StyleSheet} from 'react-native';

const Cube_Page = ({navigation, route}) => {
  const GoBackFunct = () => {
    const newUser = 'The_Leon';
    const newPassword = 'Aucune Idée';
    navigation.navigate('Galerie', {
      usernameCo: newUser,
      passwordCo: newPassword,
    });
  };
  return (
    <SafeAreaViewDiv>
      <GlobalImg source={Fond_ecran}>
        <GlobalLayer>
          <Cont3D>
            <Span font_size={32}>{route.params.nameFor3D}</Span>
            <P font_size={28}>{route.params.description}</P>
            <Video
              source={route.params.vidFor3D}
              paused={false}
              repeat={true}
              muted={true}
              style={styles.mediaPlayer}
              resizeMode="cover"
            />
            <GoBack onPress={() => GoBackFunct()}>
              <P font_size={16}>GO BACK</P>
            </GoBack>
          </Cont3D>
        </GlobalLayer>
      </GlobalImg>
    </SafeAreaViewDiv>
  );
};

export default Cube_Page;

const styles = StyleSheet.create({
  mediaPlayer: {
    width: 350,
    height: 400,
    borderWidth: 2,
    borderColor: 'deepskyblue',
  },
});
