import React from 'react'
import { useStateMachine } from 'little-state-machine'
import updateAction from '../updateAction'
import ProgressBar from '../util/progressBar'

const Result = props => {
  const { state } = useStateMachine(updateAction);

  return (
    <>
      <ProgressBar props={100} />    
      <h2  style={{fontFamily: "Helvetica,Verdana,Arial,sans-serif"}}>Results:</h2>
      <pre style={{ backgroundColor: "rgba(223, 239, 255, .4)",
       fontSize: "1.2rem",
       overflowX: "auto",
       whiteSpace: "pre-wrap",
       whiteSpace: "-moz-pre-wrap",
       whiteSpace: "-pre-wrap",
       whiteSpace: "-o-pre-wrap",
       wordWrap: "break-word",
       padding: "1rem"
       }}>
      "Question results: "
        {
        
      JSON.stringify([
         state.data.RadioGroup,
         state.data.RadioGroup2, 
         state.data.RadioGroup3, 
         state.data.RadioGroup4,
         state.data.RadioGroup5
        ], null, 2)      
      }
      </pre>
      <h2 style={{fontFamily: "Helvetica,Verdana,Arial,sans-serif"}}>
        Idea and feedback submission<br></br>
        Survey completion timer<br></br>
        View results in an Excel workbook<br></br>
        Generate a results pdf</h2>
    </>
  );
};

export default Result;
