import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <p className="time-period">
                {props.timePeriod}
            </p>
            <div className="card-separator"></div>
            <div>{props.students.map(student => {
                return (
                    <p className="student"> - {student}</p>
                )
            })}           
            </div>
        </div>
    )
}

export default Card;