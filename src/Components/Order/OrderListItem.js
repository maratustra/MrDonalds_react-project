import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/rubbish.svg';
import { totalPriceItems } from '../Functions/secondaryFunctions';
import { formatCurrency } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemCompose = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const ToppingsListItem = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
`;

const ChoicesListItem = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OrderListItem = ({ order }) => (

  <OrderItemStyled>
    <ItemCompose>
      <ItemName>{order.name}</ItemName>
      {order.topping
        .filter(topping => topping.checked)
        .map((toppingItem, index) => <ToppingsListItem key={index}>{toppingItem.name}</ToppingsListItem>)}
      <ChoicesListItem>{order.choice}</ChoicesListItem>
    </ItemCompose>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}
      <TrashButton />
    </ItemPrice>
  </OrderItemStyled>
);