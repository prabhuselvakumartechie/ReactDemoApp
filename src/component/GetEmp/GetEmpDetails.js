import React, {useState} from 'react';
import './GetEmpDetails.css';

const GetEmpDetails = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredId, setEnteredId] = useState('');
    const [enteredDep, setEnteredDep] = useState('');

    const[isNameValid, setIsNameValid] = useState(true);
    const[isNumValid, setIsNumValid] = useState(true);
    const[isDepValid, setIsDepValid] = useState(true);

    const nameChangeHandler = (event) => {           
        setEnteredName(event.target.value);
    }
    const idChangeHandler = (event) => {
        setEnteredId(event.target.value);
    }
    const departmentChangeHandler = (event) => {
        setEnteredDep(event.target.value);
    }

    const validateChanges = (data) => {
        if(!(data.name).length>0)
        {
            setIsNameValid(false);
            
        }
        if(!(data.emp_id).length>0)
        {
            setIsNumValid(false);
        }
        console.log(setIsNameValid);
        if(!(data.department).length>0)
        {
            setIsDepValid(false);
            return;
        }
        console.log(setIsNameValid);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const employeeData = {
            name: enteredName,
            emp_id: enteredId,
            department: enteredDep,
        };
        validateChanges(employeeData);
        props.onSaveEmpData(employeeData);
        setEnteredName('');
        setEnteredDep('');
        setEnteredId('');
    }

    return(
        <form onSubmit = {submitHandler}> 
            <div className="employee-controls">
                <label style={{color: !isNameValid ? 'red' : 'black'}}>Name</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler} />
            </div>
            <div className="employee-controls">
                <label style={{color: !isNumValid ? 'red' : 'black'}}>Employee ID</label>
                <input type='number' value={enteredId} onChange={idChangeHandler} />
            </div>
            <div className="employee-controls">
                <label style={{color: !isDepValid ? 'red' : 'black'}}>Department</label>
                <input type='text' value={enteredDep} onChange={departmentChangeHandler}/>
            </div>
            <div className='employee-actions'>
                <button type='submit'>Add Employee Details</button>
            </div>
        </form>
    );
}

export default GetEmpDetails;