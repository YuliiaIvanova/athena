import React from 'react';
import Recommendation from './recommendation/Recommendation';
import Interaction from './interaction/Interaction';
import {
    StyledCard,
    HeaderHighlighted,
    CardContent
} from './SocialSecurityClaimedAge.styles';
import { MOCK_MEMBERS } from '../../mocks/members';
const SocialSecurityClaimedAgeCard = () => {
    return (
        <StyledCard>
            <HeaderHighlighted>Interaction</HeaderHighlighted>
            <CardContent>
                <Recommendation members={MOCK_MEMBERS}/>
                <Interaction></Interaction>
            </CardContent>
        </StyledCard>
    );
};

export default SocialSecurityClaimedAgeCard;