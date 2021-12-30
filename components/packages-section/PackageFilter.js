import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filterPackages } from '../../redux/actions/packagesActions'
import { Button } from 'react-bootstrap'
import Select from 'react-select'
import { moreFilterindustryOptions } from '../data/moreFilterindustryOptions';

const PackageFilter = (props) => {
  const dispatch = useDispatch()
  const valuesInputIndustry = useRef();
  const threeMonthDuration = useRef();
  const sixMonthDuration = useRef();
  const valueCheckedInterview = useRef();
  const valueCheckedJob = useRef();
  const valueCheckedInternship = useRef();

  const [check, setCheck] = useState([])
  
  const onClear = (e) => {
    console.log('clicked onClear()');
    e.preventDefault();
    setCheck([]);
    console.log('valueCheckedInterview)',valueCheckedInterview);
    valuesInputIndustry.current.clearValue();
    valueCheckedJob.current.checked = false;
    valueCheckedInterview.current.checked = false;
    console.log('valueCheckedJob.current',valueCheckedJob.current);
    valueCheckedInternship.current.checked = false;
    threeMonthDuration.current.checked = false;
    sixMonthDuration.current.checked = false;
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterPackages(check))
    props.packageFilterBtn(false);
  }
  const showModalHandler = () => {
    props.packageFilterBtn(false);
  }
  const filteredArray = (clicked) => {
    setCheck((prevState) => {
      let isIndexFound = prevState.indexOf(clicked);
      console.log(isIndexFound, 'isIndexFound');
      if(isIndexFound === -1){
        prevState.push(clicked);
        return prevState;
      }
      else{
        prevState.splice(isIndexFound,1);
        return prevState;
      }
    });

  }
  const industryHandleChange = (...args) => {
    if(args[1].action==='select-option'){
    console.log('currentOnchange-->',args);
    let clicked = args[0]?.length;
    clicked = args[0][clicked-1]?.value;
    console.log('current clicked value',clicked);
    setCheck((prevState) => {
      let isIndexFound = prevState.indexOf(clicked);
      console.log(isIndexFound, 'isIndexFound');
      if(isIndexFound === -1){
        prevState.push(clicked);
        return prevState;
      }
      else
        return prevState;
    });
  }
  else if(args[1].action==='remove-value'){
    const valueToBeRemoved = args[1].removedValue.label;
    setCheck((prevState) => {
      const index = prevState.indexOf(valueToBeRemoved);
      if(index===-1){
        return prevState;
      }
      prevState.splice(index, 1);
      return prevState;

    })
    console.log('removing from final array filters', args);
  }
    console.log("CHANGE:");
    console.log('FULL LENGTH ARRAY TO CHECKED',check);
    
  };
  const durationHandleChangeThreeMonths = () => {
    console.log('3month',threeMonthDuration.current.checked);
    let clickedThreeValue = threeMonthDuration?.current?.defaultValue;
    filteredArray(clickedThreeValue);
    console.log('check', check);
  }

  const durationHandleChangeSixMonths = (e) => {
    console.log('e', e);

    let clickedSixValue = sixMonthDuration?.current?.defaultValue;
    filteredArray(clickedSixValue);
    console.log('check', check);


  }

  const interviewHandleChange = () => {
    console.log('interviewValuechecked', valueCheckedInterview);
   

    let isInterviewClicked = valueCheckedInterview.current.defaultValue;
    filteredArray(isInterviewClicked);
    console.log('check', check);

  }

  const internshipHandleChange = () => {
    console.log('internshipValueChecked', valueCheckedInternship);


    let isInternshipClicked = valueCheckedInternship.current.defaultValue;
    filteredArray(isInternshipClicked);
    console.log('check', check);
  }


  const jobHandleChange = () => {
    console.log('jobValueChecked', valueCheckedJob);

    
    let isJobClicked = valueCheckedJob.current.defaultValue;
    filteredArray(isJobClicked);
  }
   


  return (
    <form onSubmit={handleSubmit}>
      {/* <button onClick={showModalHandler}><span>&#10060;</span></button> */}
      <button onClick={showModalHandler} style={{position: 'absolute',right:'10px', top:'25px', border:'none', color:'#f07867'}}>&#10006; </button>
      <h4>Duration</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: '',
            listStyle: 'none',
          }}
        >
          <li>
          
            <input
              type="checkbox"
              onChange={durationHandleChangeThreeMonths}
              value="3 months"
              // checked={check.includes('3 months')}
              id="duration" 
              ref={threeMonthDuration}
            />
            <label className="m-3"  style={{fontSize:"large"}} htmlFor="duration">
              3 Months
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="6 months"
              onChange={durationHandleChangeSixMonths}
              // checked={check.includes('6 months')}
              id="large-duration" 
              ref={sixMonthDuration}
            />
            <label className="m-3" htmlFor="large-duration" style={{fontSize:"large"}}>
              6 Months
              {/* <h4>6 Months</h4> */}
            </label>
          </li>
        </div>
      </ul>
      <h4>Gaurenteed</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input
              type="checkbox"
              onChange={interviewHandleChange}
              value="interview"
              // checked={check.includes('interview')}
              id="interview"
              ref={valueCheckedInterview}
            />
            <label className="m-3" htmlFor="interview" style={{fontSize:"large"}}>
              Interview
              {/* <h4>Interview</h4> */}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="internship"
              onChange={internshipHandleChange}
              // checked={check.includes('internship')}
              id="internship"
              ref={valueCheckedInternship}
            />
            <label className="m-3" htmlFor="internship" style={{fontSize:"large"}}>
              Internship
              {/* <h4>Internship</h4> */}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="job"
              onChange={jobHandleChange}
              // checked={check.includes('job')}
              id="job"
              ref={valueCheckedJob}
            />
            <label className="m-3" htmlFor="job" style={{fontSize:"large"}}>
              Job
              {/* <h4>Job</h4> */}
            </label>
          </li>
        </div>
      </ul>
      <label htmlFor="industry">Select Your Industry</label>

      <Select
    // defaultValue={[moreFilterindustryOptions[1], moreFilterindustryOptions[2]]}
    isMulti={true}
    id="industry"
    name="industry"
    options={moreFilterindustryOptions.map((e) => {return {value:e.value,label:e.name}})}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={industryHandleChange}
    ref={valuesInputIndustry}
    />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
          margin:  '8px'
        }}
      >
        <Button variant="success" onClick={check} type="submit">
          Submit
        </Button>
        <Button variant="danger" onClick={onClear}>Clear</Button>
      </div>
    </form>
  )
}

export default PackageFilter
