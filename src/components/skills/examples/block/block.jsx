import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Block(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.classes.image} />
            <Card.Body>
                <Card.Title>{props.classes.name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Адаптивность: {props.classes.info[0]}</li>
                        <li>SCSS: {props.classes.info[1]}</li>
                        <li>Bootstrap: {props.classes.info[2]}</li>
                    </ul>
                </Card.Text>
                <Button variant="primary" size="xs" block href="https://crascot.github.io/porten/">Ссылка на данный сайт</Button>
            </Card.Body>
        </Card>
    )
}

export default Block;