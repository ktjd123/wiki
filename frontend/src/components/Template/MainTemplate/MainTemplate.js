import React from 'react';
import { Header } from 'components'

import './MainTemplate.css'

const MainTemplate = ({ App }) => {
    return (
        <div className='mainTemplate'>
            <Header />
            <section className='app'>
                {App}
            </section>
        </div>
    );
};

export default MainTemplate;