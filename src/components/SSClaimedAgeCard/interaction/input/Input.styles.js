import styled from 'styled-components';


export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #323456;
  width: 120px;
  padding-bottom: 10px;
`;
export const Label = styled.label`
  font-size: 12px;
  color: #323456;
  font-weight: 500;
  margin-bottom: 20px;
  display: inline-block;
`;

export const NumberInput = styled.input`
  border: none;
  color: #707070;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  display: inline-block;
  width: 100px;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  width: 16px;
  
  
  button {
    width: 16px;
    height: 16px;
    border: 2px solid #939292;
    background: transparent;
    text-align: center;
    margin-bottom: 5px;
    color: #939292;
    padding: 0;
    :hover {
      cursor: pointer;
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`;

