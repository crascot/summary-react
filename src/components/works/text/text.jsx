import React from 'react';
import style from '../works.module.css';

function Text(props) {
    return (
        <div className={style.text}>
            <h2> {props.classes.title} </h2>
            <b> {props.classes.date} </b>
            <p> {props.classes.text} </p>
        </div>
    )
}

export default Text;