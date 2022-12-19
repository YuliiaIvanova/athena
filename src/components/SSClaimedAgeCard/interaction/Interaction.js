import React, { useState, useEffect } from 'react';
import {
    InteractionWrap,
    ControlsWrap,
    ButtonPrimary,
    ButtonSecondary
} from './Interaction.styles';
import Input from './input/Input';
import DropDown from './dropdown/Dropdown';
import AnnualSSPayment from './AnnualSSPayment';
const Interaction = () => {
    const [hhMembers, setHhMembers] = useState([]);
    const [age, setAge] = useState(60);

    useEffect(() => {
        const fetchHHMembers = async () => {
            const hhMembersResponse = await fetch('/users/1');
            const hhMembersData = await hhMembersResponse.json();
            setHhMembers([...hhMembers, {
                fullName: hhMembersData?.user_info?.full_name,
                retirementAge: hhMembersData?.assumptions?.retirement_age,
            }]);
        };

        fetchHHMembers();
    }, [hhMembers]);

    const onListItemSelect = () => {
        setAge(hhMembers[0].retirementAge)
    };

    return (
        <>
            <DropDown
                header='Household Members'
                list={hhMembers}
                onListItemClickHandler={onListItemSelect}
            />
            <InteractionWrap>
                <Input value={age} setValue={setAge}/>
                <AnnualSSPayment amount={18000}/>
            </InteractionWrap>
            <ControlsWrap>
                <ButtonPrimary>Use ideal 63</ButtonPrimary>
                <ButtonSecondary>Accept 70</ButtonSecondary>
            </ControlsWrap>
        </>
    );
};

export default Interaction;