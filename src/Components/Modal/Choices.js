import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 100px;
  flex-wrap: wrap;
  margin: 0 53px 0 37px;
`;

const ChoiceRadio = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  margin: 5px;
`;

const ChoiceHeader = styled.h3`
  margin: 0 53px 10px 37px;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <ChoiceHeader>Выбирайте</ChoiceHeader>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio
              type='radio'
              name='choices'
              value={item}
              checked={choice === item}
              onChange={changeChoices}
            />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
}