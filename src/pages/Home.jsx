import React from 'react';
import Recommendations from '../components/Items/Recommendations';
import Items from '../components/Items/items';

function Home(props) {
    return (
        <div>
       <h2>Recommendations</h2>
            <Recommendations />
        </div>
    );
}

export default Home;