import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import { makeStyles } from '@material-ui/core/styles';
import {
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Box
  } from "@material-ui/core";
import './pageOne.css';
import ProgressBar from '../util/progressBar'

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
  });

const PageOne = props => {
    const { control, handleSubmit, errors } = useForm();
    const { action } = useStateMachine(updateAction);
    const onSubit = data => {
      action(data);
      props.history.push("./PageTwo");
    };
    
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
          >Step 1 of 2 - Posttest</div>
          <ProgressBar props={0} />
          <h2 style={{
            fontSize: "1.25em", 
            margin: "0",
            fontWeight: "700", 
            fontSize: "1.25em",
            fontFamily: "Helvetica,Verdana,Arial,sans-serif"
            }}>Posttest</h2>
          <div style={{color: "grey",
            fontFamily: "Helvetica, Verdana, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1.45",
            overflowWrap: "break-word",
            padding: "0px" }}>
            Please take a moment to participate in the activity posttest to claim credit.
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
          {errors.RadioGroup && <p style={{
               color: 'red',
               margin: '0', 
               fontWeight: '700', 
               fontFamily:"Helvetica,Verdana,Arial,sans-serif",
               fontSize: "14px"
            }} id="RadioGroup">This field is required.</p>}
            <label className="radioLabel">
            Which of the following is false regarding the PHQ-9 scale, which screens for depression and can also help monitor response to treatment in patients with major depressive disorder (MDD)?
            </label>
            <span class="requiredOne">*</span>
            <Controller
                as={
                <RadioGroup 
                    style={{marginBottom: "1rem", marginTop: "8px"}}
                    aria-label="Which of the following is false regarding the PHQ-9 scale, which screens for depression and can also help monitor response to treatment in patients with major depressive disorder (MDD)?" 
                    {...props}>
                  <FormControlLabel
                    value="It can enhance shared decision-making"
                    control={<Radio color="primary" />}
                    label="It can enhance shared decision-making"
                    name="It can enhance shared decision-making"
                    classes={{label: classes.label}}          
                  />
                  <FormControlLabel
                    value="It can be done in the waiting room."
                    control={<Radio color="primary" />}
                    label="It can be done in the waiting room."
                    name="It can be done in the waiting room."
                    classes={{label: classes.label}}        
                  />
                  <FormControlLabel
                    value="he maximum score is 36."
                    control={<Radio color="primary" />}
                    label="he maximum score is 36."
                    name="he maximum score is 36."
                    classes={{label: classes.label}}           
                  />
                  <FormControlLabel
                    value="A score of 0 to 4 would be defined as minimal depression."
                    control={<Radio color="primary" />}
                    label="A score of 0 to 4 would be defined as minimal depression."
                    name="A score of 0 to 4 would be defined as minimal depression."
                    classes={{label: classes.label}}        
                  />
                </RadioGroup>
                }
              rules={{ required: true }}
              name="RadioGroup"
              control={control}
            />
            
             {errors.RadioGroup2 && <p style={{
               color: 'red',
               margin: '0', 
               fontWeight: '700', 
               fontFamily:"Helvetica,Verdana,Arial,sans-serif",
               fontSize: "14px"
            }} id="RadioGroup2">This field is required.</p>}
            <label className="radioLabel">
            Which of the following was seen in the trial that examined vortioxetine versus escitalopram after treatment-emergent sexual dysfunction developed in patients treated with other selective serotonin reuptake inhibitors (SSRIs)?
            </label>
            <span class="requiredOne">*</span>
            <Controller
                as={
                <RadioGroup
                    style={{
                      marginTop: "8px"
                    }}
                    aria-label="Which of the following was seen in the trial that examined vortioxetine versus escitalopram after treatment-emergent sexual dysfunction developed in patients treated with other selective serotonin reuptake inhibitors (SSRIs)?" 
                    {...props}>
                  <FormControlLabel
                    value="Vortioxetine showed significantly greater improvements in sexual functioning versus escitalopram."
                    control={<Radio color="primary" />}
                    label="Vortioxetine showed significantly greater improvements in sexual functioning versus escitalopram."
                    name="Vortioxetine showed significantly greater improvements in sexual functioning versus escitalopram."
                    classes={{label: classes.label}}            
                  />
                  <FormControlLabel
                    value="Escitalopram was more effective at reducing MDD symptoms."
                    control={<Radio color="primary" />}
                    label="Escitalopram was more effective at reducing MDD symptoms."
                    name="Escitalopram was more effective at reducing MDD symptoms."
                    classes={{label: classes.label}}       
                  />
                 <FormControlLabel
                    value="New safety signals emerged with vortioxetine that were not seen in the original clinical trials."
                    control={<Radio color="primary" />}
                    label="New safety signals emerged with vortioxetine that were not seen in the original clinical trials."
                    name="New safety signals emerged with vortioxetine that were not seen in the original clinical trials."
                    classes={{label: classes.label}}            
                  />
                  <FormControlLabel
                    value="Headache was the most common treatment-emergent adverse event leading to discontinuation."
                    control={<Radio color="primary" />}
                    label="Headache was the most common treatment-emergent adverse event leading to discontinuation."
                    name="Headache was the most common treatment-emergent adverse event leading to discontinuation."
                    classes={{label: classes.label}}       
                  />
                </RadioGroup>
                }
              rules={{ required: true }}
              name="RadioGroup2"
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
            <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{width: "100%"}}>
              <Button className="Button" variant="contained" color="primary" type="submit">
                Next
              </Button>
            </Box>
            
            </form> 
        </Box>
        
      );
    };
    
    export default withRouter(PageOne);
    

