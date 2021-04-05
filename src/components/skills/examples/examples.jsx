import React from 'react';
import { Container } from 'react-bootstrap';
import Block from './block/block';
import style from './examples.module.css';
import porten from './block/image/porten.png';
import beauty from './block/image/beauty.png';
import itIndustry from './block/image/IT-industry.jpg';

const classes = [
    {
        image: porten,
        name: 'Porten',
        info: ['да', 'нет', 'нет'],
        reference: 'https://crascot.github.io/porten/'
    },

    {
        image: beauty,
        name: 'Beauty',
        info: ['да', 'да', 'нет'],
        reference: 'https://crascot.github.io/beauty/'
    },

    {
        image: itIndustry,
        name: 'IT-industry',
        info: ['да', 'да', 'да'],
        reference: 'https://crascot.github.io/IT-industry/'
    }
]

let blockData =
    classes.map(data => <Block image={data.image}
        name={data.name}
        info={data.info}
        reference={data.reference}
        />
    );

function Examples() {

    return (
        <Container fluid>
            <h2>Пример моей работы</h2>
            <div className={style.works}>
                {blockData}
            </div>
        </Container>
    )
}

export default Examples;