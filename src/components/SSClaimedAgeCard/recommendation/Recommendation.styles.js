import styled from 'styled-components';

export const RecommendationHeader = styled.h2`
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RecommendationSubHeader = styled.h3`
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 18px;
`;
export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #E2E1E1;
`;
export const ClaimList = styled.ul`
  list-style: none;
  padding: 0;
  .claim-item {
    font-size: 12px;
    font-weight: 500;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
    :last-child {
      margin: 0;
    }
  }
`;

export const BulletChart = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${props => props.chartColor};
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
`;

export const DonutChartWrap = styled.div`
 position: relative;
  margin-bottom: 25px;
`;
export const DonutChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 100%;
  border: 15px solid #090CBD;
  border-top: 15px solid #437CF8;
  border-left: 15px solid #437CF8;
  position: relative;
`;

export const ChartLabel = styled.label`
  font-weight: 500;
  color: #7C7C7C;
  font-size: 12px;
  text-align: center;
`;
export const TotalAnnualIncome = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #1B1D3D;
`;

const HHMemberIncome = styled.span`
  background-color: white;
  font-weight: 700;
  padding: 3px 20px;
  border: 1px solid #939292;
  position: absolute;
  
  line-height: 18px;
  font-size: 12px;
  min-width: 54px;
  text-align: center;
`;

export const HHMemberOneIncome = styled(HHMemberIncome)`
  top: 15%;
  left: 0;
`;

export const HHMemberTwoIncome = styled(HHMemberIncome)`
  bottom: 15%;
  right: 0;
`;