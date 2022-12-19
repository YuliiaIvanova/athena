import styled from 'styled-components';
export const DropDownContainer = styled.div`
  width: 154px;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const DropDownHeader = styled.div`
  border: 1px solid #BBBBBB;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  color: #7C7C7C;
  font-weight: 300;
  font-size: 12px;
  padding: 12px;
  :after {
    content: "\\2304";
    float: right;
  }
  :hover {
    cursor: pointer;
  }
`;

export const DropDownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px 10px;
  border: 1px solid #BBBBBB;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
`;

export const ListItem = styled.li`
  font-weight: 300;
  font-size: 12px;
  :hover {
    cursor: pointer;
  }
`;