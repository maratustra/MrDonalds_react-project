import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 100px;
  flex-wrap: wrap;
  margin: 0 53px 0 37px;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  margin: 5px;
`;

const ToppingCheckbox = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;

const ToppingHeader = styled.h3`
  margin: 0 53px 10px 37px;
`;

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <ToppingHeader>Добавки</ToppingHeader>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox
              type='checkbox'
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
}