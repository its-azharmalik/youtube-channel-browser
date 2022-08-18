import React from 'react';

// components
import CategorySection from '../components/templates/CategorySection';
import ExploreTopBar from '../components/templates/ExploreTopBar';

function ExploreScreen() {
    return (
        <div>
            <ExploreTopBar />
            <CategorySection />
        </div>
    );
};

export default ExploreScreen;