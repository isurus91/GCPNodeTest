import React, { Component } from "react";
import { Panel, PanelGroup, Button, Collapse, Well, Navbar, NavDropdown, MenuItem, Jumbotron, Table, Media, Image } from "react-bootstrap";
import { render } from "react-dom";



class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="row jumbotron jumbotron-3" style={{ 'padding': '10px' }}>
        <div className="col-12 mx-auto d-flex justify-content-center flex-wrap p-3 mb-2 bg-light text-dark" inline style={{ 'height': '10%', 'padding': '5px' }}>
          <Jumbotron style={{ 'width': '100%', 'height': '10%' }} >
            <h1 className="text-center">COGNITE <img width="200px" src={require('./cognite.png')} style={{ 'float': 'right', 'top': '0%' }} className="img-responsive center-block" alt="Responsive image" /></h1>
            <h1 className="text-center">SERVICE HEALTH DASHBOARD</h1>
          </Jumbotron>
        </div>
        <div className="col-12" cols style={{ 'padding': '10px' }}>
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
          </Table>
        </div>
        <div className="col-12" >
          <Panel defaultExpanded>
            <Panel.Heading>
              <Panel.Title toggle>
                <Table responsive>
                  <tr>
                    <td>1</td>
                    <td>cognite.api</td>
                    <td>HTTP</td>
                    <td>20 d</td>
                    <td><Button bsStyle="success" className="btn-circle"></Button></td>
                    <td>224 ms</td>
                    <td><Button bsStyle="info" onClick={() => this.setState({ open: !this.state.open })}>View more</Button></td>
                  </tr>
                </Table>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse timeout='500'>
              <Panel.Body>
                <div>
                  <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546497503593&to=1546501103593&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="450" height="200" frameborder="0"></iframe>
                </div>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
        <div className="col-12">
          <Panel defaultExpanded >
            <Panel.Heading>
              <Panel.Title toggle>
                <Table responsive>
                  <tr>
                    <td>2</td>
                    <td>bigtable.raw</td>
                    <td>HTTP</td>
                    <td>20 d</td>
                    <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                    <td>224 ms</td>
                    <td><Button bsStyle="info" href="https://www.cognite.com/">View more</Button></td>
                  </tr>
                </Table>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse timeout='1'>
              <Panel.Body>
                <div>
                  <iframe src="https://snapshot.raintank.io/dashboard-solo/snapshot/y7zwi2bZ7FcoTlB93WN7yWO4aMiz3pZb?from=1493369923321&to=1493377123321&panelId=4" width="650" height="300" frameborder="0"></iframe>
                </div>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
        <div className="col-12">
          <Panel defaultExpanded bsStyle="danger">
            <Panel.Heading>
              <Panel.Title toggle>
                <Table responsive>
                  <tr>
                    <td>3</td>
                    <td>bigtable.tsdb</td>
                    <td>HTTP</td>
                    <td>20 d</td>
                    <td><Button bsStyle="danger" className="btn-circle"></Button></td>
                    <td>224 ms</td>
                    <td><Button bsStyle="info" onClick={() => this.setState({ open: !this.state.open })}>View more</Button></td>
                  </tr>
                </Table>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse timeout='500'>
              <Panel.Body>
                <div>
                  <iframe src="https://grafana.cognite.ai/d-solo/000000009/tsdb-subscriber?panelId=7&orgId=1&from=1546495867861&to=1546499467862&var-subscription_id=All&var-cdp=multitenant&var-topic_id=All" width="450" height="200" frameborder="0"></iframe>
                </div>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
        <div className="col-12">
          <Panel defaultExpanded>
            <Panel.Heading>
              <Panel.Title toggle>
                <Table responsive>
                  <tr>
                    <td>4</td>
                    <td>3Dserive</td>
                    <td>HTTP</td>
                    <td>20 d</td>
                    <td><Button bsStyle="success" className="btn-circle"></Button></td>
                    <td>224 ms</td>
                    <td><Button bsStyle="info" onClick={() => this.setState({ open: !this.state.open })}>View more</Button></td>
                  </tr>
                </Table>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse timeout='1'>
              <Panel.Body>
                <div>
                  <iframe src="https://snapshot.raintank.io/dashboard-solo/snapshot/y7zwi2bZ7FcoTlB93WN7yWO4aMiz3pZb?from=1493369923321&to=1493377123321&panelId=4" width="650" height="300" frameborder="0"></iframe>
                </div>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
        <div className="col-12">
          <Panel defaultExpanded>
            <Panel.Heading>
              <Panel.Title toggle>
                <Table responsive>
                  <tr>
                    <td>5</td>
                    <td>pubsub.topics</td>
                    <td>HTTP</td>
                    <td>20 d</td>
                    <td><Button bsStyle="warning" className="btn-circle"></Button></td>
                    <td>224 ms</td>
                    <td><Button bsStyle="info" onClick={() => this.setState({ open: !this.state.open })}>View more</Button></td>
                  </tr>
                </Table>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse timeout='1'>
              <Panel.Body>
                <div>
                  <iframe src="https://snapshot.raintank.io/dashboard-solo/snapshot/y7zwi2bZ7FcoTlB93WN7yWO4aMiz3pZb?from=1493369923321&to=1493377123321&panelId=4" width="650" height="300" frameborder="0"></iframe>
                </div>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
       </div>
      </div >
    );
  }
}
export default App
