import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import Block from './block/block';
import './examples.css';
import porten from './block/image/porten.png';
import beauty from './block/image/beauty.png';
import itIndustry from './block/image/IT-industry.jpg';

const classes = {  
    porten: {
        image: porten,
        name: 'Porten',
        info: ['да', 'нет', 'нет']
    },

    beauty: {
        image: beauty,
        name: 'Beauty',
        info: ['да', 'да', 'нет']
    },

    itIndustry: {
        image: itIndustry,
        name: 'IT-industry',
        info: ['да', 'да', 'да']
    }
}

function Examples() {
    return (
        <Container fluid>
            <h2>Пример моей работы</h2>
            <div className='works'>
                <Block classes={classes.porten} />
                <Block classes={classes.beauty} />
                <Block classes={classes.itIndustry} />
            </div>
        </Container>
    )
}

export default Examples;