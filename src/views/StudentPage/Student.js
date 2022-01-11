import React, { useEffect , useState } from "react";
import "./Student.css";
import axios from "axios";
import Nav from '../../components/LeftNavBar/nav'
export const Student = (props) => {
    const [studentData, setStudentData] = useState({})
    
    useEffect(() => {
        axios
        .get(`https://blue-ocean-be.uc.r.appspot.com/api/students/${props.student}`)
        .then((response) => {
        setStudentData(response.data[0])
        
        });
        
    },[])
    
    
 //console.log(studentData[0]['name'])
 //studentData[0]['name']
//studentData[0]['rank']
    return (
    <>
      
      <div className="studentcontainer">
          <div>{studentData.name}</div>
          <div>{studentData.rank}</div>
          <div>{studentData.ets}</div>
          <div>{studentData.cohort}</div>
          <div>{}</div>
      </div>
    </>
  );
};
