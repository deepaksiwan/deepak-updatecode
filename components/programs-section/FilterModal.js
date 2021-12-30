import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { filterProgram } from '../../redux/actions/programActions'
import { Button } from 'react-bootstrap'

const FilterModal = (props) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState([])



  const showModalHandler = () => {
    props.showFilterModalBtn(false);
  }

  const handleCheck = (e) => {
    let arr = [...check]
    let clicked = e.target.value
    let checkfinish = arr.indexOf(clicked)


    if (checkfinish === -1) {

      arr.push(clicked)
    } else {
      arr.splice(checkfinish, 1)
    }
    setCheck(arr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterProgram(check))
    console.log(filterProgram(check))
    props.showFilterModalBtn(false)
  }
  /*const filteredArray = (clicked) => {
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
  const onClear = (e) => {
    console.log('clicked onClear()');
    e.preventDefault();
    setCheck([]);
  
    console.log('valuefreecourse)', valuefreecourse);
    valuefreecourse.current.checked = false;
  }

  const HandleChangevaluefreecourse = (e) => {
    console.log('e', e);

    let clickedvaluefree = valuefreecourse?.current?.defaultValue;
    filteredArray(clickedvaluefree);
    console.log('check', check);


  }*/

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={showModalHandler} style={{ position: 'absolute', right: '10px', top: '25px', border: 'none', color: 'black' }}> &#10006;</button><button onClick={showModalHandler} style={{ position: 'absolute', right: '10px', top: '25px', border: 'none', color: 'black' }}> &#10006;</button>
      <h4>Course Categoy</h4>
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
              onChange={handleCheck}
              value="free"
              checked={check.includes('free')}
            />
            <label className="m-3">
              <h4>Free</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="paid"

              onChange={handleCheck}
              checked={check.includes('paid')}
            />
            <label className="m-3">
              <h4>Paid</h4>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="subscription"

              onChange={handleCheck}
              checked={check.includes('subscription')}
            />
            <label className="m-3">
              <h4>Subscription</h4>
            </label>
          </li>
        </div>
      </ul>

      <h4>Duration</h4>
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
            <input type="checkbox" />
            <label className="m-3">
              <h4>3 Months</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>6 Months</h4>
            </label>
          </li>
        </div>
      </ul>

      <h4>Level</h4>
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
            <input type="checkbox" />
            <label className="m-3">
              <h4>Beginner</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Advanced</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Master</h4>
            </label>
          </li>
        </div>
      </ul>
      {/* Guarenteed */}

      <h4> Guarenteed</h4>

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
            <input type="checkbox" />
            <label className="m-3">
              <h4>Interview</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Internships</h4>
            </label>
          </li>
          <li>
            <input type="checkbox" />
            <label className="m-3">
              <h4>Jobs</h4>
            </label>
          </li>
        </div>
      </ul>
      <h5>Price</h5>

      {/*<input
        type="range"
        name="range"
        step="500" min="1000"
        max="5000" value="500"
        onChange="rangePrimary.value=value">
      </input>
      <input type="text"
      id="rangePrimary" />*/}

      <input
        type="range"
        name="range"
        min="1000"
        max="50000"
        step="500"
        style={{ width: '300px' }}
      ></input>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
        }}
      >
        <Button variant="success" onClick={check} type="submit">
          Submit
        </Button>
        <Button type='reset' value='reset' variant="danger" >Clear</Button>
      </div>
    </form>
  )
}

export default FilterModal
