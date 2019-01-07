import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Clock from 'react-live-clock';
import axios from 'axios';
import Select from 'react-select';

class App extends Component {
    componentDidMount() {
        console.log('Hello World');
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                console.log(response.data);
                console.log('------------------------------------------------------------------')
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const techCompanies = [
            { label: "Cluster 1", value: 1 },
            { label: "Production", value: 2 },
            { label: "Development", value: 3 }
        ];

        return (
            <div>
                <div className="nav" style={{ 'backgroundColor': '#cdd0d3', 'fontSize': '22px', 'display': 'inlineBlock', 'display': 'flex', 'flexDirection': 'row' }}>
                    <b><Clock className="text-right" format={'DD-MM-YYYY, h:mm a'} ticking={true} timezone={'CET'} /><br /><p style={{ 'fontSize': '12px' }}>Oslo, Norway (GMT+1)</p></b>
                </div>
                <nav className="navbar  navbar-expand-lg navbar-light" style={{ 'backgroundColor': '#cdd0d3', 'display': 'flex', 'flexDirection': 'row' }}>
                    <span className="navbar-text">
                    </span>
                    <img width="200px" src={require('./cognite.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive image" />
                    <h1 className="text-center">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SERVICE  HEALTH  DASHBOARD</h1>
                    <div className="col-md-2" >
                       <div><Select options={techCompanies}/></div> 
                    </div>
                </nav>
                <table className="table table-hover">
                    <thead style={{ 'backgroundColor': '#e2eefa' }}>
                        <tr>
                            <th>Service Name</th>
                            <th>Protocol</th>
                            <th>Uptime</th>
                            <th>Status</th>
                            <th>Heartbeat</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr data-toggle="collapse" data-target="#accordion" className="clickable" >
                            <td>cognite.api</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="success" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <div id="accordion" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>
                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion1" className="clickable">
                            <td>bigtable.raw</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <div id="accordion1" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion2" className="table-danger">
                            <td>bigtable.tsdb</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="danger" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <div id="accordion2" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion3" className="clickable">
                            <td>3Dserive</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="success" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <div id="accordion3" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion4" className="clickable">
                            <td>pubsub.topics</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <div id="accordion4" className="collapse">
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>
                                    <iframe style={{ 'margin': '5px' }} src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="350" frameBorder="0"></iframe>                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;