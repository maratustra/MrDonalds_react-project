import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';

function App() {

  const openItem = useOpenItem();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu {...openItem} />
      <ModalItem {...openItem} />
    </>
  );
}

export default App;
