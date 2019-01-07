import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import "./App.css";

var store = {
  headerOffset: null
};

let data = [
  {
    id: 0,
    ser_Name: "name 0",
    protocal: "HTTP",
    uptime: "10d",
    stats: "success",
    pingdom: "225ms"
  },
  {
    id: 1,
    ser_Name: "name 0",
    protocal: "HTTP",
    uptime: "15d",
    stats: "warning",
    pingdom: "212ms"
  },
  {
    id: 2,
    ser_Name: "name 0",
    protocal: "HTTP",
    uptime: "20d",
    stats: "success",
    pingdom: "190ms"
  },
  {
    id: 3,
    ser_Name: "name 0",
    protocal: "HTTP",
    uptime: "30d",
    stats: "danger",
    pingdom: "205ms"
  }
];

let cols = [
  {
    icon: "",
    label: "#"
  },
  {
    icon: "",
    label: "ser_Name"
  },
  {
    icon: "",
    label: "protocal"
  },
  {
    icon: "",
    label: "uptime"
  },
  {
    icon: "",
    label: "stats"
  },
  {
    icon: "",
    label: "pingdom"
  }
];

class RowItem extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
      stsBtn: "success"
    };
  }

  toggleRow(e) {
    console.log("toggleRow");
    this.setState({ open: !this.state.open });
  }

  render() {
    let classes = "";
    if (this.state.open) {
      classes = "open";
    }

    return (
      <li onClick={this.toggleRow.bind(this)} className={classes}>
        <div className="heading">
          <div className="col">{this.props.id}</div>
          <div className="col">{this.props.ser_Name}</div>
          <div className="col">{this.props.protocal}</div>
          <div className="col">{this.props.uptime}</div>
          <div className="col">
            <Button bsStyle={this.props.stats} className="btn-circle" />
          </div>
          <div className="col">{this.props.pingdom}</div>
        </div>
        <RowContent open={this.state.open} />
        {this.props.children}
      </li>
    );
  }
}

class RowContent extends React.Component {
  clicker() {}

  render() {
    let jsxhtml = (
      <div className="content" onClick={this.clicker.bind(this)}>
        row content
        {this.props.children}
      </div>
    );

    if (this.props.open) {
      jsxhtml = (
        <div className="content open" onClick={this.clicker.bind(this)}>
          row content
          {this.props.children}
        </div>
      );
    }

    return <div>{jsxhtml}</div>;
  }
}

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      headerOffset: null,
      headerFixed: true
    };
  }

  //   handleScroll(e) {

  //     let scrollTop = e.srcElement.body.scrollTop;
  //     console.log('scroll...', scrollTop, this.state.headerOffset);

  //     this.setState({
  //       headerFixed: true
  //     });
  //   }

  componentDidMount() {
    //   window.addEventListener('scroll', this.handleScroll.bind(this));
    // THIS SEEMS THE ONLY PLACE WE CAN PICK UP THE REF FOR THE HEADER
    console.log("reactdom: ", ReactDOM.findDOMNode(this.refs.header));

    store.headerOffset = ReactDOM.findDOMNode(
      this.refs.header
    ).getBoundingClientRect().top;

    console.log("store:", store.headerOffset);

    // this.setState({headerOffset:ReactDOM.findDOMNode(this.refs.header)});
  }

  render() {
    let columns = this.props.columns.map((item, inx) => {
      return <HeaderColumn label={item.label} />;
    });

    //go through the rows
    let rows = this.props.data.map((item, inx) => {
      return <RowItem {...item} />;
    });

    let classes = "header";
    if (this.props.headerFixed) {
      classes = "header fixed";
    }

    return (
      <div className="table">
        {this.props.children}
        <div className={classes} ref="header">
          {columns}
          <div className="shadow" />
        </div>
        <ul>{rows}</ul>
      </div>
    );
  }
}

class HeaderColumn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className="hcol">{this.props.label}</div>;
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tableHeader: null,
      tableHeaderFixed: false
    };
  }

  handleScroll(e) {
    // console.log(e);
    let scrollTop = e.srcElement.body.scrollTop;

    //HOW DO WE GET THE REFS HERE FOR THE ITEM OFFSET?

    //itemTranslate = Math.min(0, scrollTop/3 - 60);
    console.log("app scroll...", scrollTop, store.headerOffset);
    // console.log('reactdom: ', ReactDOM.findDOMNode(this.refs.header), this.refs);
    // console.log(ReactDOM.findDOMNode(this.refs.header));

    if (scrollTop >= store.headerOffset) {
      this.setState({
        tableHeaderFixed: true
      });
    } else {
      this.setState({
        tableHeaderFixed: false
      });
    }
  }

  componentDidMount() {
    console.log("app did mount");
    window.addEventListener("scroll", this.handleScroll.bind(this));

    //does not work from here...
    // console.log('reactdom: ', ReactDOM.findDOMNode(this.refs.header), this.refs);
    // this.setState({tableHeader:ReactDOM.findDOMNode(this.refs.header)});
  }

  render() {
    return (
      <div className="container">
        <div className="topbox">
          <h1 className="text-center">COGNITE </h1>
          <h1 className="text-center">SERVICE HEALTH DASHBOARD</h1>
        </div>
        <Table
          data={data}
          columns={cols}
          headerFixed={this.state.tableHeaderFixed}
          scrollFn=""
        />
      </div>
    );
  }
}

export default App;