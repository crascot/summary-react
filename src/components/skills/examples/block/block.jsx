import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Block(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Адаптивность: {props.info[0]}</li>
                        <li>SCSS: {props.info[1]}</li>
                        <li>Bootstrap: {props.info[2]}</li>
                    </ul>
                </Card.Text>
                <Button variant="primary" size="xs" block href={props.reference}>Ссылка на данный сайт</Button>
            
            </Card.Body>
        </Card>
    )
}

export default Block;