import React, { useState } from 'react';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    ListItem
} from './Dropdown.styles';

const DropDown = ({ header, list, onListItemClickHandler }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    const listItems = list.map(item => (
       <ListItem key={item.fullName}>
           {item.fullName}
       </ListItem>
    ));
    return (
        <>
            <h5>{header}</h5>
            <DropDownContainer>
                <DropDownHeader onClick={toggle}>Choose...</DropDownHeader>
                { isOpen &&
                    <DropDownList onClick={onListItemClickHandler}>
                        {listItems}
                    </DropDownList>
                }
            </DropDownContainer>
        </>
    );
};

export default DropDown;
