import React from 'react';
import { Wrap } from '../Style/ToppingsStyle';
import { Label } from '../Style/ToppingsStyle';
import { Checkbox } from '../Style/ToppingsStyle';
import { Header } from '../Style/ToppingsStyle';

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <Header>Выбирайте</Header>
      <Wrap>
        {openItem.choices.map((item, i) => (
          <Label key={i}>
            <Checkbox
              type='radio'
              name='choices'
              value={item}
              checked={choice === item}
              onChange={changeChoices}
            />
            {item}
          </Label>
        ))}
      </Wrap>
    </>
  );
}