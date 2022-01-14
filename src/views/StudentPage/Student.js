import React, { useState } from "react";
// import axios from "axios";

import Nav from '../../components/LeftNavBar/nav';
import TaskList from '../../components/TaskList/TaskList';
import "./Student.css";

export const Student = (props) => {
  const [studentData, setStudentData] = useState({})

  // useEffect(() => {
  //   axios
  //     .get(`https://blue-ocean-be.uc.r.appspot.com/api/students/${props.student}`)
  //     .then((response) => {
  //       setStudentData(response.data[0])

  //     });

  // }, [props.student])

  // Sample data for student tasks
  let studentTasks = {
    30: ['Vision', 'Dental', 'Phase-2'],
    60: [],
    90: ['CIF'],
    4: [],
    5: [],
    6: ['VA']
  }

  return (
    <>
      <Nav user={"Student Data"} students={props.ids} />
      <div className="student-data-content">
        <div className="content-header">
          <p id="header-name" className="header-text">{studentData.name}</p>
          <p className="header-text">{studentData.rank}</p>
          <p className="header-text">{studentData.ets}</p>
          <p className="header-text">{studentData.cohort}</p>
        </div>

        {/* Loop through the data (sample for now, api data in the future) */}
        {/* Display a Task component for each value within the time period */}
        {Object.keys(studentTasks).map((key) =>
          <TaskList key={key} timePeriod={key} tasks={studentTasks[key]} />
        )}
      </div>
    </>
  );
};
