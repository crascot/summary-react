import React from 'react';
import Examples from './examples/examples';
import './skills.css';
import WhatKnow from './what-know/what-know';


function Skills(props) {
    return (
        <div className='block'>
            <WhatKnow />
            <Examples examples={props.examples} />
        </div>
    )
}

export default Skills;