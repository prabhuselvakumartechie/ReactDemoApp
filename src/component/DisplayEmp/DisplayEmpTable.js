import DisplayEmpDetails from "./DisplayEmpDetails";


const DisplayEmpTable = (props) => {

    return(
        <div className="empDetails_wrapper">
            <table className="empDetails_table">
                <thead>
                    <tr className="empDetails_head">
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                { props.empDetails.map((empData) => (
                     <DisplayEmpDetails 
                        name={empData.name} 
                        emp_id={empData.emp_id}
                        department={empData.department}
                        key={empData.key}
                     />
                ))}
            </table>
        </div>
    );
}

export default DisplayEmpTable;