import React from 'react'
import "./Card.css"

export default function Card(props) {
    const val = props.value;

    return (
        <div className="card">
            <img src={val.src} alt=""/>
            <div className="card__info">
                <h3>{val.title}</h3>
                <h5>{val.description}</h5>
                <h4>{val.price}</h4>
            </div>
        </div>
    )
}
