import React, { useMemo } from 'react';

import {
    RecommendationHeader,
    RecommendationSubHeader,
    RecommendationContainer,
    ClaimList,
    BulletChart,
    DonutChartWrap,
    DonutChart,
    ChartLabel,
    TotalAnnualIncome,
    HHMemberOneIncome, HHMemberTwoIncome
} from './Recommendation.styles';

const Recommendation = (props) => {
    const {
        members
    } = props;

    const renderMembers = useMemo(() => members.map(({ id, firstName, claimedAge, chartColor }) => (
        <li
            key={id}
            className='claim-item'
        >
            <BulletChart chartColor={chartColor}></BulletChart>
            {firstName} claims in {claimedAge}
        </li>
    )), [members]);

    return (
        <>
            <RecommendationHeader>Best Social Security Claimed Age</RecommendationHeader>
            <RecommendationSubHeader>Our Recommendation</RecommendationSubHeader>
            <RecommendationContainer>
                <ClaimList>
                    {renderMembers}
                </ClaimList>
                <DonutChartWrap>
                    <DonutChart>
                        <ChartLabel>Estimated Household Annual Income</ChartLabel>
                        <TotalAnnualIncome>50K</TotalAnnualIncome>
                    </DonutChart>
                    <HHMemberOneIncome>20k</HHMemberOneIncome>
                    <HHMemberTwoIncome>30k</HHMemberTwoIncome>
                </DonutChartWrap>
            </RecommendationContainer>
        </>


    )
};

export default Recommendation;