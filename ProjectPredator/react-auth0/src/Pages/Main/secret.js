import React, { Component } from 'react';

class Secret extends Component {
    constructor(props){
        super(props);
        //Initial State
        this.state = {
            predators: [],
            predator: {
                ID: 0,
                f_name: "",
                l_name: "",
                job_title: "",
                salary: 0,
                finished_projects: 0
            },
            visible: false

        }
        this.getPredators = this.getPredators.bind(this);
        this.deletePredator = this.deletePredator.bind(this);
        this.renderPredators = this.renderPredators.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

  componentDidMount(){
    this.getPredators();
  }

  //Print all posible queries from mysql workbench
  getPredators = _ =>{
    fetch("http://localhost:4000/secret/").then(response => response.json()).then(response => this.setState({predators: response.data})).catch(err => console.error(err))
  }

  deletePredator = (i, ID)=>{
    let predators = this.state.predators.slice();
    console.log(predators);
 
    predators.splice(i,1);
    this.setState({
        predators
    });

    fetch(`http://localhost:4000/secret/delete/` + this.state.predators[i].ID).then(response => this.getPredators).catch(err => console.error(err));
  }

  renderPredators = ({ID, f_name, l_name, job_title, salary, finished_projects}, i) => 
    <table className="list" key={i}>
      <tbody className="list-f-name">{f_name}</tbody>
      <tbody className="list-l-name">{l_name}</tbody>
      <tbody className="list-job-title">{job_title}</tbody>
      <tbody className="list-salary">{salary}</tbody>
      <tbody className="list-finished-projects">{finished_projects}</tbody>
      <button className="delete-button" key={i} onClick={() => {this.deletePredator(i, ID)}}>Fire</button>
    </table>

  render() {
    const {predators, predator, visible} = this.state;
    return (
      
      <div className="Secret">
        <div className="list-wrapper">
            <h1 className="employee-title">Employee</h1>
            <div className="header-title">
                <div className="fname-title">First Name</div>
                <div className="lname-title">Last Name</div>
                <div className="job-title-title">Job Title</div>
                <div className="salary-title">Salary</div>
                <div className="finished-job-title">Finished Jobs</div>
                <div className="line"></div>
              </div>
            <div className="sub-list-wrapper">

                {predators.map(this.renderPredators)}
            </div>
            
        </div>
 
        <button className="Single-Sign-Out-Button" onClick={this.props.auth.signOut}>Sign out</button>
 
      </div>
    );
  }
}

export default Secret;