import React from 'react';
import { Container } from 'react-bootstrap';
import Block from './block/block';
import style from './examples.module.css';
import porten from './block/image/porten.png';
import beauty from './block/image/beauty.png';
import itIndustry from './block/image/IT-industry.jpg';

const classes = {  
    porten: {
        image: porten,
        name: 'Porten',
        info: ['да', 'нет', 'нет'],
        ref: 'https://crascot.github.io/porten/'
    },

    beauty: {
        image: beauty,
        name: 'Beauty',
        info: ['да', 'да', 'нет'],
        ref: 'https://crascot.github.io/beauty/'
    },

    itIndustry: {
        image: itIndustry,
        name: 'IT-industry',
        info: ['да', 'да', 'да'],
        ref: 'https://crascot.github.io/IT-industry/'
    }
}

function Examples() {
    return (
        <Container fluid>
            <h2>Пример моей работы</h2>
            <div className={ style.works }>
                <Block classes={ classes.porten } />
                <Block classes={ classes.beauty } />
                <Block classes={ classes.itIndustry } />
            </div>
        </Container>
    )
}

export default Examples;