import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { withRouter } from 'react-router-dom'
import { useStateMachine } from 'little-state-machine'
import updateAction from '../updateAction'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import {
    RadioGroup,
    FormControlLabel,
    Radio,
    Button
  } from "@material-ui/core";
import ProgressBar from '../util/progressBar'
import './pageTwo.css'

const useStyles = makeStyles({
  label: {
    textTransform: 'capitalize',
    padding: '0',
    width: 'auto',
    lineHeight: '1.5',
    fontSize: '.780em',
    verticalAlign: 'middle',
    maxWidth: '85%',
    whiteSpace: 'normal',
    cursor: 'pointer',
    margin: '2px 0 0 4px',
    fontWeight: '700',
    color: 'gray',
    fontFamily: 'Helvetica,Verdana,Arial,sans-serif' 
  },
  RadioGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  radio: {
    '&$checked': {
      color: '#00B700'
    }
  },
  checked: {}
});

const PageTwo = props => {
    const {  control, errors, handleSubmit } = useForm();
    const { action } = useStateMachine(updateAction);
    const onSubit = (data) => {
      action(data);
      props.history.push("./result");
    };
    const back = () => {
      props.history.push("./")
    }
    const classes = useStyles();
    return (
      
      <Box display="flex" flexDirection="column">
          <div
            style={{
              fontSize: ".813em",
              lineHeight: "1!important",
              margin: "0 0 8px 12px!important",
              padding: "0!important",
              clear: "both",
              opacity: ".6",
              fontWeight: "400",
              color: "#333",
              fontFamily: "Helvetica,Verdana,Arial,sans-serif"
            }}
          >Step 2 of 2 - Evaluation</div>
          <ProgressBar props={50} />
          <h2 style={{
            fontWeight: "700", 
            fontSize: "1.25em",
            margin: "0",
            fontFamily: "Helvetica,Verdana,Arial,sans-serif"
            }}>Evaluation</h2>
          <div style={{color: "grey",
            fontFamily: "Helvetica, Verdana, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1.45",
            overflowWrap: "break-word",
            padding: "0px" }}>
            Your evaluation of this activity is extremely important, as it allows us to plan for future educational programs. Please take a moment to answer the following questions.
          </div>
          <Box
              style={{
                margin: '14px 0',
                width: '100%',
                borderTop: '1px dotted #ccc',
                padding: '16px 0 0 0',
                clear: "both"
              }}
            >
          </Box>
          <form onSubmit={handleSubmit(onSubit)}>
            {errors.RadioGroup3 && <p style={{
               color: 'red',
               margin: '0', 
               fontWeight: '700', 
               fontFamily:"Helvetica,Verdana,Arial,sans-serif",
               fontSize: "14px"
            }} id="RadioGroup3">This field is required.</p>}
            <label className="radioLabel">
            How many years have you been treating patients with major depressive disorder (MDD)?
            </label>
            <span class="required">*</span>
            <Controller
                as={
                <RadioGroup 
                    className="FirstRadioGroup"
                    aria-label="Which of the following is false regarding the PHQ-9 scale, which screens for depression and can also help monitor response to treatment in patients with major depressive disorder (MDD)?" 
                    {...props}>
                  <FormControlLabel
                    value="1 to 9"
                    control={<Radio color="primary"/>}
                    label="1 to 9"
                    name="1 to 9"
                  />
                  <FormControlLabel
                    value="10 to 20"
                    control={<Radio color="primary"/>}
                    label="10 to 20"
                    name="10 to 20"
                    classes={{label: classes.label}}        
                  />
                  <FormControlLabel
                    value="21 to 30"
                    control={<Radio color="primary"/>}
                    label="21 to 30"
                    name="21 to 30"
                    classes={{label: classes.label}}           
                  />
                  <FormControlLabel
                    value="More than 30"
                    control={<Radio color="primary"/>}
                    label="More than 30"
                    name="More than 30"
                    classes={{label: classes.label}}        
                  />
                  <FormControlLabel
                    value="N/A"
                    control={<Radio color="primary"/>}
                    label="N/A"
                    name="N/A"
                    classes={{label: classes.label}}        
                  />
                </RadioGroup>
                }
              rules={{ required: true }}
              name="RadioGroup3"
              control={control}
            />
 
            {errors.RadioGroup4 && <p style={{
               color: 'red',
               margin: '0', 
               fontWeight: '700', 
               fontFamily:"Helvetica,Verdana,Arial,sans-serif",
               fontSize: "14px"
            }} id="RadioGroup3">This field is required.</p>}    
            <label className="radioLabel">
            Approximately how many patients with MDD do you see per week?
            </label>
            <span class="required">*</span>
            <Controller
                as={
                <RadioGroup 
                    className="FirstRadioGroup"
                    aria-label="Which of the following was seen in the trial that examined vortioxetine versus escitalopram after treatment-emergent sexual dysfunction developed in patients treated with other selective serotonin reuptake inhibitors (SSRIs)?" 
                    {...props}>
                  <FormControlLabel
                    value="1 to 9"
                    control={<Radio color="primary"/>}
                    label="1 to 9"
                    name="1 to 9"
                  />
                  <FormControlLabel
                    value="10 to 20"
                    control={<Radio color="primary"/>}
                    label="10 to 20"
                    name="10 to 20"
                    classes={{label: classes.label}}        
                  />
                 <FormControlLabel
                    value="21 to 30"
                    control={<Radio color="primary"/>}
                    label="21 to 30"
                    name="21 to 30"
                    classes={{label: classes.label}}           
                  />
                  <FormControlLabel
                    value="More than 30"
                    control={<Radio color="primary"/>}
                    label="More than 30"
                    name="More than 30"
                    classes={{label: classes.label}}        
                  />
                  <FormControlLabel
                    value="N/A"
                    control={<Radio color="primary"/>}
                    label="N/A"
                    name="N/A"
                    classes={{label: classes.label}}        
                  />
                </RadioGroup>
                }
              rules={{ required: true }}
              name="RadioGroup4"
              control={control}
            />
             
             {errors.RadioGroup5 && <p style={{
               color: 'red',
               margin: '0', 
               fontWeight: '700', 
               fontFamily:"Helvetica,Verdana,Arial,sans-serif",
               fontSize: "14px"
            }} id="RadioGroup3">This field is required.</p>}
             <label className="radioLabel">
             How likely are you to recommend this activity to a colleague?
            </label>
            <span class="required">*</span>
            <Controller
                as={
                <RadioGroup 
                    className="RadioGroup"
                    aria-label="Which of the following was seen in the trial that examined vortioxetine versus escitalopram after treatment-emergent sexual dysfunction developed in patients treated with other selective serotonin reuptake inhibitors (SSRIs)?" 
                    {...props}>
                  <FormControlLabel
                    value="1 - Not at all likely"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
                    label="1 - Not at all likely"
                    name="1 - Not at all likely"
                    classes={{label: classes.label}}
                    className="FormControlLabel" 
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}} />}
                    label="2"
                    name="2"
                    classes={{label: classes.label}}
                    className="FormControlLabel"      
                  />
                 <FormControlLabel
                    value="3"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="3"
                    name="3"
                    classes={{label: classes.label}}  
                    className="FormControlLabel"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="4"
                    name="4"
                    classes={{label: classes.label}}
                    className="FormControlLabel"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="5"
                    name="5"
                    classes={{label: classes.label}}
                    className="FormControlLabel"  
                  />
                  <FormControlLabel
                    value="6"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="6"color="primary"
                    name="6"
                    classes={{label: classes.label}}
                    className="FormControlLabel"
                  />
                  <FormControlLabel
                    value="7"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="7"
                    name="7"
                    classes={{label: classes.label}}
                    className="FormControlLabel"      
                  />
                  <FormControlLabel
                    value="8"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="8"
                    name="8"
                    classes={{label: classes.label}} 
                    className="FormControlLabel"
                  />
                  <FormControlLabel
                    value="9"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="9"
                    name="9"
                    classes={{label: classes.label}} 
                    className="FormControlLabel"
                  />
                  <FormControlLabel
                    value="10 - Extremely likely"
                    control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>}
                    label="10 - Extremely likely"
                    name="10 - Extremely likely"
                    classes={{label: classes.label}}  
                    className="FormControlLabel"
                  />
                </RadioGroup>
                }
              rules={{ required: true }}
              name="RadioGroup5"
              control={control}
            />
            
             <Box
              style={{
                margin: '14px 0',
                width: '100%',
                borderTop: '1px dotted #ccc',
                padding: '16px 0 0 0',
                clear: "both"
              }}
            >
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" style={{width: "100%"}} className="buttonWrapper">
              <Button variant="contained" color="primary" onClick={()=> back()} className="Prev">
                Previous
              </Button>
              <Button variant="contained" color="primary" type="submit" className="Next">
                Next
              </Button>
            </Box>
            
            </form> 
        </Box>
    );
  };
  
  export default withRouter(PageTwo);
  