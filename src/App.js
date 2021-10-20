import DisplayEmpTable from './component/DisplayEmp/DisplayEmpTable';
import GetEmpDetails from './component/GetEmp/GetEmpDetails';

const App = () => {
  const employee_details = [
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
]

  const saveEmpDataHandler = (enteredData) => {
    const empData = {
      ...enteredData
    }
    console.log("Inside Parent!!!!!")
    console.log(empData);
  };

  return (
    <div>
      <h2 className="header">Employee Details</h2>
      <GetEmpDetails onSaveEmpData={saveEmpDataHandler} />
      <DisplayEmpTable empDetails={employee_details} />
    </div>

  );
}

export default App;