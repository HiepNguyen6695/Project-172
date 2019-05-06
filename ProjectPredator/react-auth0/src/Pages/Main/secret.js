import React, { Component } from 'react';
import Chart from '../../Components/Chart/chart';
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
            visible: false,
            chartData: {}

        }
        this.getPredators = this.getPredators.bind(this);
        this.deletePredator = this.deletePredator.bind(this);
        this.renderPredators = this.renderPredators.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleDataChart = this.handleDataChart.bind(this);

    }

  componentDidMount(){
    this.getPredators();
    
  }
  componentWillMount(){
    this.handleDataChart();
  }

  //Print all posible queries from mysql workbench
  getPredators = _ =>{
    fetch("http://localhost:4000/secret/").then(response => response.json()).then(response => this.setState({predators: response.data})).catch(err => console.error(err))

    
  
  }

  handleDataChart(){
    
    this.setState({
      chartData:{
        labels: ["Hiep", "Jose", "Alex"],
        datasets: [{
            labels: "Population",
            data: [90,80,120],
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 253, 0.6)",
                "rgba(255, 206, 86, 0.6)"
            ]
        }]
      }
    })
  }

  deletePredator = (i)=>{
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
      <tbody>
        <tr onChange={() => this.setState({})}>
          <td className="list-f-name">{f_name}</td>
          <td className="list-l-name">{l_name}</td>
          <td className="list-job-title">{job_title}</td>
          <td className="list-salary">{salary}</td>
          <td className="list-finished-projects">{finished_projects}</td>
         
          <button className="delete-button" key={i} onClick={() => {this.deletePredator(i, ID)}}>Fire</button>
        </tr>
      </tbody>

    </table>

  render() {
    const {predators, predator, visible} = this.state;
    return (
      
      <div className="Secret">
        <div className="list-wrapper">
            <h1 className="employee-title">Employee</h1>
            <table className="header-title">
              <tbody>
                <tr>
                    <td className="fname-title">First Name</td>
                    <td className="lname-title">Last Name</td>
                    <td className="job-title-title">Job Title</td>
                    <td className="salary-title">Salary</td>
                    <td className="finished-job-title">Finished Jobs</td>
                    <div className="line"></div>
                </tr>
              </tbody>
            </table>
            <div className="sub-list-wrapper">

                {predators.map(this.renderPredators)}
            </div>
            <Chart chartData={this.state.chartData}/>
           
        </div>
        <button className="Single-Sign-Out-Button" onClick={this.props.auth.signOut}>Sign out</button>
        <a href="http://localhost:8080/job/ProjectPredators/"><button className="Jenkins-btn">Jenkins</button></a>
      </div>
    );
  }
}

export default Secret;