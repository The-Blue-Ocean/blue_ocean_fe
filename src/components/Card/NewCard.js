import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <p className="time-period">
                {props.timePeriod}
            </p>
            <div className="card-separator"></div>
            <div className='studentcontainer'>
            <div>{props.students.map(student => {
                return (
                        <button className="student"> - {student.name}</button>
                        )
                    })}           
                    </div>
            </div>
        </div>
    )
}

export default Card;