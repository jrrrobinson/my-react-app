import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

// Declare your Component here
class TeamsPanel extends Component{

    constructor() {
        super();
        this.state = { 
            teams: [] 
        }
    }

    componentDidMount() {
        //Fetch
        axios.get("https://tranquil-earth-54392.herokuapp.com/teams").then((res) => {
            //Success
            this.setState({ 
                teams: res.data, 
            });
    }).catch((err)=>{
        //NOT FOUND
    });
    }

    render(){
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title">Teams</h3>
            </div>
            <div className="panel-body">
            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                <tbody>
                    {this.state.teams.map((object, index) => {
                        return (
                            <tr>
                                <td key={index}>{object.TeamName}</td>
                                <td key={index}>{object.Employees.length} Employees</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
            <Link to="/teams" className="btn btn-primary form-control">View All Teams Data</Link>
            </div>
            </div>
        );
    }
}

// export the component by name
export default TeamsPanel; 

