import React from "react";
import "./List.scss";
const List = ({ employees, handleEdit, handleDelete }) => {
  // salary formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div
      //recently added remove later
      style={{
        //   // width: "calc(73.33% - 10px)",
        //   margin: "100px 10px",
        float: "right",
      }}
      className="list-container"
    >
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td className="action-buttons">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button edit-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="action-buttons">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
