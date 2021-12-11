import React from 'react';
import { Wrap } from '../Style/ToppingsStyle';
import { Label } from '../Style/ToppingsStyle';
import { Checkbox } from '../Style/ToppingsStyle';
import { Header } from '../Style/ToppingsStyle';

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <Header>Добавки</Header>
      <Wrap>
        {toppings.map((item, i) => (
          <Label key={i}>
            <Checkbox
              type='checkbox'
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </Label>
        ))}
      </Wrap>
    </>
  );
}