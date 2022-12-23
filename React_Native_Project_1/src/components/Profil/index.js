import React from 'react';
import Span from '../Span';
import {
  ProfileContRectangle,
  ProfileCont,
  Logo,
  AbsoluteBackground,
  AroundText,
  AroundTextCont,
  Description,
  AbsoluteX,
} from './style/Profil';
import LogoPower from '../../../assets/img/home_img/power.png';
import Profil_Text from './Profil_text/';
import {Profil_Background} from '../../../assets/img/galerie_page/galerie_background';
import CloseImg from '../../../assets/img/galerie_page/x.png';

const Profil = ({usernameCo, passwordCo}) => {
  return (
    <ProfileCont>
      <AbsoluteX>
        <Logo size="52" source={CloseImg} />
      </AbsoluteX>
      <AbsoluteBackground>
        <Profil_Background />
      </AbsoluteBackground>
      <ProfileContRectangle>
        <Logo size="100" source={LogoPower} />
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
      </ProfileContRectangle>
    </ProfileCont>
  );
};

export default Profil;
