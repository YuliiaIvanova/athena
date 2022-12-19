import styled from 'styled-components';

export const InteractionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const HeaderStyled = styled.h4`
  font-size: 12px;
  color: #323456;
  font-weight: 500;
  display: inline-block;
  margin: 0 0 20px 0;
`;

export const Amount = styled.div`
  color: #707070;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #1B1D3D;
  padding: 7px 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: transparent;
  color: #1B1D3D;
`;

export const ButtonSecondary = styled(Button)`
  background-color: #1B1D3D;
  color: #45EEE9;
`;

export const ControlsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;