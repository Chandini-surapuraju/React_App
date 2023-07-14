import React, { useState } from 'react';
function EmployeeList() {
    const [employees, setemployees] = useState([]);
    const [searchText, setSearchText] = useState('');
  
    // Fetch data from the API endpoint
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setemployees(data.data))
      .catch(error => console.log(error));

      const handleSearch = event => {
        setSearchText(event.target.value);
      };

      const filteredEmployees = employees.filter(employee =>
        employee.first_name.toLowerCase().includes(searchText.toLowerCase())
      );
  
      return (
        <div>
            <div className="search-container">
                <div className="search-box">
                    <input
                    type="text"
                    placeholder="Search by first name"
                    value={searchText}
                    onChange={handleSearch}
                    />
                </div>
            </div>
            {filteredEmployees.map(employee => (
                <div key={employee.id} className="employee-item">
                <div className="avatar-container">
                    <span className="id-badge">{employee.id}</span>
                    <img src={employee.avatar} alt="employee Avatar" className="avatar" />
                </div>
                <div className="employee-details">
                    <h2>{employee.first_name}</h2>
                </div>
                </div>
            ))}
        </div>
      );
  }
  
  export default EmployeeList;
  