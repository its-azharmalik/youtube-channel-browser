import React from 'react';
import CircularChannelImage from './components/atoms/CircularChannelImage';
import ExploreScreen from './pages/ExploreScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
    return (
        <>
            <ExploreScreen />
            <HomeScreen />
            <CircularChannelImage />
        </>
    );
}

export default App;
