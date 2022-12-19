import styled from 'styled-components';
export const CardGridWrap = styled.div`
margin: auto;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background-color: white;
  width: 200px;
  float: left;
  border: 1px solid #ccc;
  margin:0 20px 20px 0;
  :last-child {
    margin-right: 0;
  }
`;
export const RowContainer = styled.div`
  width: 640px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const CardsPerRow = styled.div`
  overflow: hidden;
`;
export const CombinedHeader = styled.h1`
  align-self: flex-start;
`;
export const Content = styled.main`
  background-color: #ccc;
  min-height: 200px;
  margin-bottom: 20px;
  padding: 20px;
`;
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #1B1D3D;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
  margin: 0 auto;
  align-self: center;
`;

