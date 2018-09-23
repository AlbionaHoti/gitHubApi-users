import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import Navigation from './Navigation';
import ListUsers from './ListUsers';

class Overview extends Component {

  constructor(props) {
    super(props)

    this.state = {
      totalUsers: null,
      isLoading: true,
    }
  }

  handleListRefresh(totalUsers) {
    this.setState({ totalUsers, isLoading: false })
  }

  render() {
    

    return (
       <div className="container p-6">
        <Navigation />
        <h4 className="p-5">Below it's a list of Github users</h4>
        <Panel className="">
          <ListUsers />
        </Panel>
      </div>
    )
  }
}

export default Overview;