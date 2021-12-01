import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../image/banner.png';

const Banner = styled.div`
  width: 1060px;
  height: 210px;
  margin: auto;
  background-image: url(${bannerImg});
`;

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);