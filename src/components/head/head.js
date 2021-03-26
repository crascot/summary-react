import React from 'react';
import { Image } from 'react-bootstrap';
import Info from './info/info';
import face from './face.jpg';
import './head.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Head() {
    return (
        <div className='head'>
            <Image className='face' src={face} roundedCircle />
            <Info />
        </div>
    )
}

export default Head;