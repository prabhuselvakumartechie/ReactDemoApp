import React, {useState} from 'react';

const DisplayEmpDetails = (props) => {

    const [name, setName] = useState(props.name);
    const [empid, setEmpid] = useState(props.emp_id);

    const UpdateHandler = () => {
        setName('Updated');
        setEmpid('34343');
        console.log("updated");
    }

    return(
        <tbody>
            <tr className="empDetails_content">
                <td>{name}</td>
                <td>{empid}</td>
                <td>{props.department}</td>
                <td>
                    <button className="success" onClick={UpdateHandler}>EDIT</button>
                    <button className="error">DELETE</button>
                </td>
            </tr>
        </tbody>
    );
}

export default DisplayEmpDetails;
