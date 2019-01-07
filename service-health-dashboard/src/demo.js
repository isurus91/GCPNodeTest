import React, { Component ,Nav,NavItem,Dropdown} from "react";
import { Panel, PanelGroup, Button, Collapse, Well, Navbar, NavDropdown, MenuItem, Jumbotron, Table, Media, Image } from "react-bootstrap";
import { render } from "react-dom";


class App extends Component {
  constructor(){
    super()
    this.state = {
      location: [
        {
            id: 0,
            title: 'New York',
            selected: false,
            key: 'location'
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location'
        },
        {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'location'
        },
        {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'location'
        }
      ]
    }
  }handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
      <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          <Dropdown
  title="Select location"
  option={this.state.location}
/>
      </div>
       {listOpen && <ul className="dd-list">
         {list.map((item) => (
           <li className="dd-list-item" key={item.id} >{item.title}</li>
          ))}
        </ul>}
      </div>
    );
  }
}
export default App
