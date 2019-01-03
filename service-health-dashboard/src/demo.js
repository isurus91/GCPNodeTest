import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Jumbotron, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Collapse,Well } from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div className="row" style={{ 'padding': '10px' }}>
        <div className="row" style={{ 'float': 'center', 'width': '100%' }}>
          <div className="col-12 mx-auto d-flex justify-content-center flex-wrap" inline style={{ 'height': '35%', 'padding': '5px' }}>
            <Jumbotron style={{ 'width': '100%' }} >
              <h1 className="text-center">COGNITE <img width="250px" src={require('./cognite.png')} style={{ 'float': 'right', 'top': '5%' }} className="img-responsive center-block" alt="Responsive image" /></h1>
              <h1 className="text-center">SERVICE HEALTH DASHBOARD</h1>
            </Jumbotron>
          </div>

          <div className="col-md-12 border">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Service Name</th>
                  <th>Protocol</th>
                  <th>Uptime</th>
                  <th>Status</th>
                  <th>Pingdom</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>cognite.api</td>
                  <td>HTTP</td>
                  <td>20 d</td>
                  <td><Button bsStyle="warning">warning</Button></td>
                  <td>224 ms</td>
                  <td><Button bsStyle="info" onClick={() => this.setState({ open: !this.state.open })}>View more</Button></td>
                </tr>
                <tr>
                  <Collapse timeout='500' in={this.state.open}>
                    <div>
                      <Well>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
            </Well>
                    </div>
                  </Collapse>
                </tr>
                <tr>
                  <td>2</td>
                  <td>tsdb-subscriber</td>
                  <td>HTTP</td>
                  <td>2 mon</td>
                  <td><Button bsStyle="success">success</Button></td>
                  <td>172 ms</td>
                  <td><Button bsStyle="info">View more</Button></td>

                </tr>
                <tr>
                  <td>3</td>
                  <td>cognite.http.display.ugc</td>
                  <td>HTTP</td>
                  <td>2 mon</td>
                  <td><Button bsStyle="danger">Critical</Button></td>
                  <td>159 ms</td>
                  <td><Button bsStyle="info">View more</Button></td>

                </tr>
                <tr>
                  <td>4</td>
                  <td>cognite.https.display-stg.ugc</td>
                  <td>HTTPS</td>
                  <td>2 mon</td>
                  <td><Button bsStyle="success">success</Button></td>
                  <td>519 ms</td>
                  <td><Button bsStyle="info">View more</Button></td>

                </tr>
                <tr>
                  <td>5</td>
                  <td>cognite.https.display.ugc</td>
                  <td>HTTPS</td>
                  <td>3 mon</td>
                  <td><Button bsStyle="warning">warning</Button></td>
                  <td>312 ms</td>
                  <td><Button bsStyle="info">View more</Button></td>

                </tr>
                <tr>
                  <td>6</td>
                  <td>cognite.prod-preview</td>
                  <td>HTTP</td>
                  <td>21 d</td>
                  <td><Button bsStyle="success">success</Button></td>
                  <td>1024 ms</td>
                  <td><Button bsStyle="info">View more</Button></td>

                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;