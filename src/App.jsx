import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ExploreScreen from './pages/ExploreScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/explore' element={<HomeScreen />} />
                <Route path='/' element={<ExploreScreen />} />
            </Routes>
            
        </Router>
    );
}

export default App;
