import React from 'react';
import './MainTemplate.css'

const MainTemplate = ({App}) => {
    return (
        <div className='mainTemplate'>
            <section className='app'>
                {App}
            </section>
        </div>
    );
};

export default MainTemplate;