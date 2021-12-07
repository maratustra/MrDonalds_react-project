import React from 'react';
import styled from 'styled-components';

const CountWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 53px 120px 37px;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const ButtonCount = styled.button`
  background-color: transparent;
  width: 25px;
`;

export function CountItem({ count, setCount, onChange }) {

  return (
    <CountWraper>
      <span>Количество</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type='number' min='1' value={count} onChange={onChange} />
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
    </CountWraper>
  );
}