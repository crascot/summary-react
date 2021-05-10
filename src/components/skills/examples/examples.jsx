import React from 'react';
import { Container } from 'react-bootstrap';
import Block from './block/block';
import style from './examples.module.css';

function Examples(props) {
    let blockData =
    props.addExample.map(data => <Block addExample={data.addExample} />
    );

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