import React from 'react';
import {
    CardGridWrap,
    CardContainer,
    RowContainer,
    CardsPerRow,
    CombinedHeader,
    Content,
    Button
} from './CardGrid.styles';

const Card = (props) => {
    const {
        splitView = false,
        header='HEADER',
        subtitle='SUBTITLE',
        content='CONTENT',
    } = props;

    return (
        <CardContainer>
            <header>
                { !splitView && <h1>{header}</h1> }
                <h6>{subtitle}</h6>
            </header>
            <Content>{content}</Content>
            { !splitView && <Button> BUTTON TEXT</Button> }
        </CardContainer>
    );
};

const Row = ({cards, isSmallVariant}) => {
    return (
        <RowContainer>
            { !isSmallVariant && <CombinedHeader>ROW HEADER</CombinedHeader> }
            <CardsPerRow>
                {
                    cards.map((card, index) => (
                        <Card key={index} splitView={!isSmallVariant} {...card}/>
                    ))
                }
            </CardsPerRow>
            { !isSmallVariant && <Button>BUTTON TEXT</Button> }
        </RowContainer>
    );
};

const CardGrid = ({ cards }) => {
    const cardsAmount = cards.length;
    const COLS_NUMBER = 3;
    const isSmallVariant = cardsAmount === 9;
    let numberOfFullRows = Math.floor(cardsAmount / COLS_NUMBER);
    const getCardsContent = () => {
        let content = [];

        for (let i = 0; i < numberOfFullRows; i++) {
            content.push(
                <Row
                    key={i}
                    cards={cards.slice(i * COLS_NUMBER, i * COLS_NUMBER + COLS_NUMBER)}
                    isSmallVariant={isSmallVariant}
                />);
        }
        return content;
    };

    return (
        <CardGridWrap>
            {getCardsContent()}
            { numberOfFullRows * COLS_NUMBER !== cardsAmount &&
                <Row cards={cards.slice(numberOfFullRows * COLS_NUMBER)}/>
            }
        </CardGridWrap>
    );
};

export default CardGrid;