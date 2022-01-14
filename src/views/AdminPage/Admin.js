import React, { useState, useEffect } from 'react'
import Nav from "../../components/LeftNavBar/nav";
import Card from "../../components/Card/NewCard";
import { useAuth } from '../../services/AuthContext'
import { useNavigate } from "react-router-dom";

import { fetchData } from '../../services/fetchAPI'

import "./Admin.css";

const Adminpage = () => {
  const [data, setData] = useState([])
  const { currentUser } = useAuth()
  const [cohortData, setCohortData] = useState();
  const [loadingData, setLoadingData] = useState(false);
  const [studentsByETS, setStateStudentsETS] = useState({
    30: [], // 30 days out
    60: [], // 60 days out
    90: [], // 90 days out
    4: [], // 4 months out
    5: [], // 5 months out
    6: [], // 6 months out
  });
  const navigate = useNavigate()

  // Filter data to display MCSPs on left nav
  const filterData = (uniqueData) => {
    let theData = [...new Set(uniqueData.map(x => x.cohort))]

    setCohortData(theData)
  }

  const filterStudentEts = (data) => {
    // Set the current date
    const currentDate = new Date();

    for (let student of data) {
      // Create a new date object for ets date
      // based on the student's ets date
      let etsDate = new Date(student.ets);

      // Calculate the time in miliseconds until ets date
      let timeUntilETS = etsDate.getTime() - currentDate.getTime();

      // Calculate the time in days until ets date; round down to nearest day
      // 1000 miliseconds per second
      // 60 seconds per minute
      // 60 minutes per hour
      // 24 hours per day
      let daysUntilETS = Math.floor(timeUntilETS / (1000 * 60 * 60 * 24));

      // Determine the appropriate array to push studnet to;
      // based on number of days until ets date
      if (daysUntilETS <= 30) {
        studentsByETS[30].push(student);
      } else if (daysUntilETS <= 60) {
        studentsByETS[60].push(student);
      } else if (daysUntilETS <= 90) {
        studentsByETS[90].push(student);
      } else if (daysUntilETS <= 120) {
        studentsByETS[4].push(student);
      } else if (daysUntilETS <= 152) {
        studentsByETS[5].push(student);
      } else {
        studentsByETS[6].push(student);
      }
    }
    setStateStudentsETS(studentsByETS)
  }

  useEffect(() => {
    currentUser.getIdToken()
      .then(idToken => fetchData(idToken, currentUser.email))
      .then(data => {
        setData(data)
        if (data.isAdmin === false) navigate('/student')
        filterData(data)
        filterStudentEts(data)
        setLoadingData(true)
      })
  }, [])

  return (
    <>
      {loadingData && <Nav user={'Welcome Admin'} isAdmin={data.isAdmin} students={data._ids} loadingData={loadingData} cohortData={cohortData} />}
      {loadingData && <div className="content">
        <div className="break">
          <Card timePeriod="30 Days" students={studentsByETS[30]} studentID={data.studentID} />
          <Card timePeriod="60 Days" students={studentsByETS[60]} studentID={data.studentID} />
        </div>
        <div className="break">
          <Card timePeriod="90 Days" students={studentsByETS[90]} studentID={data.studentID} />
          <Card timePeriod="4 Months" students={studentsByETS[4]} studentID={data.studentID} />
        </div>
        <div className="break">
          <Card timePeriod="5 Months" students={studentsByETS[5]} studentID={data.studentID} />
          <Card timePeriod="6 Months" students={studentsByETS[6]} studentID={data.studentID} />
        </div>
      </div>
      }
    </>
  );
};

export default Adminpage;
