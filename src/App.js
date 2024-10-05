import React, { Component } from 'react';
import './grades.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {participants: []};
	}

  
  async componentDidMount() {
    fetch('http://ec2-3-18-104-124.us-east-2.compute.amazonaws.com:8080/participant/all')
      .then(response => response.json())
      .then(data =>  {
        this.setState({participants : data});
    })
  }

  render() {
    return (

      <div>
        <div class= "container">
          <table id= "table">
          <caption>Student Enrollment Data</caption> 
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Enrollment Date</th>
              <th>Password</th>
              <th>Status</th>
            </tr>
              {
                this.state.participants.map((participant, index) =>  
                       <tr key={index}>
                          <td>{participant.id}</td>
                          <td>{participant.name}</td>
                          <td>{participant.lastName}</td>
                          <td>{participant.email}</td>
                          <td>{participant.enrollmentDate}</td>
                          <td>{participant.password}</td>
                          <td>{participant.status}</td>
                        </tr>
                  )
              }
        </table>        
        </div>

      </div>
    );
  }
}

export default App;