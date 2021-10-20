import React, { useState } from 'react';
import DisplayEmpTable from './component/DisplayEmp/DisplayEmpTable';
import GetEmpDetails from './component/GetEmp/GetEmpDetails';

const App = () => {
  
 // const employee_details = 

  const [employeeDetails, setEmployeeDetails] = useState(
    [
      {
          key: '1',
          name : 'Kalaiarasi',
          emp_id : 1234,
          department : 'development'
      },
      {
          key: '2',
          name : 'Prabhu',
          emp_id : 1334,
          department : 'development'
      },
      {
          key: '3',
          name : 'Kanimozhi',
          emp_id : 1354,
          department : 'tester'
      },  
      {
          key: '4',
          name : 'kiruthiga',
          emp_id : 1364,
          department : 'support'
      }
   ]);
   

  const saveEmpDataHandler = (enteredData) => {
    const empData = {
      ...enteredData
    }

    let temp = employeeDetails;
    temp = temp.push(empData);
    setEmployeeDetails(temp);

    console.log(empData);
  };

  return (
    <div>
      <h2 className="header">Employee Details</h2>
      <GetEmpDetails onSaveEmpData={saveEmpDataHandler} />
      <DisplayEmpTable empDetails={employeeDetails} />
    </div>

  );
}

export default App;