import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  padding: 20px 76px;
  background-color: #299B01;
  font-family: 'Roboto';
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #FFFFFF;
    color: #299B01;
    border-color: #299B01;
  }
`;