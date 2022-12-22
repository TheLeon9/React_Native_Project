import React from 'react';
import {ProfileContRectangle, ProfileCont, Logo} from './style/Profil';
import LogoPower from '../../../assets/img/home_img/power.png';
import Profil_Text from './Profil_text/';

const Profil = ({usernameCo, passwordCo}) => {
  return (
    <ProfileCont>
      <ProfileContRectangle>
        <Logo size="100" source={LogoPower} />
        <Profil_Text span="Username :" p={usernameCo} />
        <Profil_Text span="PassWord :" p={passwordCo} />
        <Profil_Text span="Title :" p="DIEU" />
        <Profil_Text span="Age :" p="UNDEFINE" />
        <Profil_Text
          span="Description :"
          p="Lorem ipsum ronaldo ballon d'or France Perdu Dommage mais bon peut mieux faire"
        />
      </ProfileContRectangle>
    </ProfileCont>
  );
};

export default Profil;
