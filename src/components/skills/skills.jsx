import React from 'react';
import Examples from './examples/examples';
import './skills.css';
import WhatKnow from './what-know/what-know';

function Skills() {
    return (
        <div className='block'>
            <WhatKnow />
            <Examples />
        </div>
    )
}

export default Skills;