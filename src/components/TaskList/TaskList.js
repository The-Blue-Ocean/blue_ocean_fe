import React, { useState, useEffect } from 'react';

// import Task from '../Task/Task';
import './TaskList.css';

const TaskList = (props) => {

    // Handle the collapse of each time period section
    const collapse = (e) => {
        let target = document.getElementById(e.target.id + "-list");
        target.style.display = target.style.display == "none" 
        ? ""
        : "none";
    }

    // Determine whether to label the time period with Days or Months
    // based on the number of digits for the time period
    const timeFrame = props.timePeriod.length > 1
    ? "Days"
    : "Months"

    // Create a display component for each task passed in through props
    // To avoid error, retrun single display if there are no tasks
    const list = props.tasks.length > 0
    ? props.tasks.map((task) => 
        <div key={task} className="task">
            <input type="checkbox" className="task-checkbox" />
            <p className="task-name">{task}</p>
        </div>
    )
    : <p className="no-tasks">No tasks</p>

    return (
        <>
            <div className='taskList-period'>
                <p id={props.timePeriod} 
                    className="period-header" 
                    onClick={collapse}>
                        {props.timePeriod} {timeFrame}
                </p>
                <div id={`${props.timePeriod}-list`} className="tasklist">
                    {list}
                </div>
            </div>
        </>
    );
};

export default TaskList;