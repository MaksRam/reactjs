
import "./EmployeesCard.css";
import GetEmployees from "./getEmployees";



const Employees = (props) => {
  

  //add new employee

  // remove employee

  // let allEmployees = props.employees.map((x) => (
  //   <SingleEmployee name={x.name} occupation={x.occupation} tribe={x.tribe} />
  // )); 

  
  // handleClick={addNewEmployee}

  return (
    <div>
      <h2>Employees:</h2>
      <div className="container">
        <div className="row gx-2 gy-4">
          {/* {allEmployees} */}
          <GetEmployees />

        </div>
      </div>
    </div>
  );
};

export default Employees;
