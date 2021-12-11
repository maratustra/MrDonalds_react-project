import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/CommonButton';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

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
  height: 630px;
  background-color: #fff;
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
  margin: 0 53px 30px 37px;
  font-family: 'Pacifico';
  font-size: 30px;
  line-height: 53px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 53px 20px 37px;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const closeModal = e => {
    if (e.target.id === 'overlay') setOpenItem(null);
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
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
          <p>{formatCurrency(openItem.price)}</p>
        </CardNameAndPrice>
        <CountItem {...counter} />
        {openItem.toppings && <Toppings {...toppings} />}
        {openItem.choices && <Choices {...choices} openItem={openItem} />}
        <TotalPriceItem>
          <span>Цена:</span>
          <span>{formatCurrency(totalPriceItems(order))}</span>
        </TotalPriceItem>
        <Button
          onClick={addToOrder}
          disabled={order.choices && !order.choice}
        >Добавить</Button>
      </Modal>
    </Overlay>
  );
};