import React from 'react';

// components
import CategorySection from '../components/templates/CategorySection';
import ExploreTopBar from '../components/templates/ExploreTopBar';
import NewChannelsSection from '../components/templates/NewChannelsSection';
import TrendingSection from '../components/templates/TrendingSection';

function ExploreScreen() {
	return (
		<div>
			<ExploreTopBar />
			<CategorySection />
			<TrendingSection />
			<NewChannelsSection />
		</div>
	);
}

export default ExploreScreen;
