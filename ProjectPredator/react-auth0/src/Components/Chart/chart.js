import {Bar, Pie, Line} from 'react-chartjs-2';
import React, { Component } from 'react';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData: props.chartData
        }
        
    }

    render(){
        return(
            <div className="Chart"> 
                <h1 className="chart-header">CHART</h1>
                <div className="chart">
                    <Bar
                        data={this.state.chartData}
                        options={{
                       
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Chart;