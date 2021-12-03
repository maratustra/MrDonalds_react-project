import React from 'react';
import styled from 'styled-components';
import { Button } from './ModalButton';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #fff;
  text-align: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const CardNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 53px 170px 37px;
  font-family: 'Pacifico';
  font-size: 30px;
  line-height: 53px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const closeModal = e => {
    if (e.target.id === 'overlay') setOpenItem(null);
  };

  const order = {
    ...openItem
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };


  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <CardNameAndPrice>
          <p>{openItem.name}</p>
          <p>{openItem.price.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
          })}</p>
        </CardNameAndPrice>
        <Button onClick={addToOrder}>Добавить</Button>
      </Modal>
    </Overlay>
  );
};