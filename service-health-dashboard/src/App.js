import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Jumbotron, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Collapse, Well, Panel } from 'react-bootstrap';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid table" style={{ 'height': '20%', }}>
                    <div class="container">
                        <h1 className="text-center">COGNITE <img width="200px" src={require('./cognite.png')} style={{ 'float': 'right' }} className="img-responsive center-block" alt="Responsive image" /></h1>
                        <h1 className="text-center">SERVICE HEALTH DASHBOARD</h1>
                    </div>
                </div>
                <table className="table table-hover" >
                    <thead >
                        <tr>
                            <th>Service Name</th>
                            <th>Protocol</th>
                            <th>Uptime</th>
                            <th>Status</th>
                            <th>Pingdom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-toggle="collapse" data-target="#accordion1" className="clickable">
                            <td>cognite.api</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="success" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion1" className="collapse">
                                    <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="500" height="400" frameborder="0"></iframe>
                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion2" className="clickable">
                            <td>bigtable.raw</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion2" className="collapse">
                                    <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All"  width="500" height="400" frameborder="0"></iframe>
                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion3" className="clickable alert-danger">
                            <td>bigtable.tsdb</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="danger" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion3" className="collapse">
                                    <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All"  width="500" height="400" frameborder="0"></iframe>
                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion4" className="clickable">
                            <td>3Dserivce</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="success" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion4" className="collapse">
                                    <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All"  width="500" height="400" frameborder="0"></iframe>
                                </div>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion5" classNames="clickable">
                            <td>pubsub.topics</td>
                            <td>HTTP</td>
                            <td>20 d</td>
                            <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                            <td>224 ms</td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="accordion5" className="collapse">
                                    <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All"  width="500" height="400" frameborder="0"></iframe>
                                    <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All"  width="500" height="400" frameborder="0"></iframe>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;