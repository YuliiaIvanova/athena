import SocialSecurityClaimedAgeCard from './components/SSClaimedAgeCard/SocialSecurityClaimedAgeCard';
import GlobalStyles from './assets/globalStyles';
import React from 'react';
import CardGrid from './components/CardGrid/CardGrid';
import {
    SMALL_VARIANT_CARDS,
    LARGE_VARIANT_CARDS,
    MEDIUM_VARIANT_CARDS
} from './mocks/cards';

function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <h1>Task #1 (9 cards, small variant):</h1>
        <CardGrid cards={SMALL_VARIANT_CARDS}/>

        <h1>Task #2 (3 cards, large variant):</h1>
        <CardGrid cards={LARGE_VARIANT_CARDS}/>

        <h1>Task #3 (9 > cards > 3, medium variant):</h1>
        <CardGrid cards={MEDIUM_VARIANT_CARDS}/>

        <h1>Task #4:</h1>
        <SocialSecurityClaimedAgeCard/>
    </div>
  );
}

export default App;
