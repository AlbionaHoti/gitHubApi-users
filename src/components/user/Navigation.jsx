import React, { Component } from 'react';
import { connect } from "react-redux";

import { actionCreators as searchAction } from "../../store/searchStore";
import { bindActionCreators } from "redux";

class Navigation extends Component {
  state = {};

  doSearch(event) {
    this.props.search(event.target.value);
  }

  render() {
    return <nav className="navbar navbar-light bg-li">
        <a className="navbar-brand" size="" href="https://developer.github.com/v3/?">
          About GitHub Api
        </a>
        <form className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input 
              type="text"   
              value={this.props.text}
              className="form-control mr-sm-2" 
              placeholder="Login" 
              aria-label="Login" 
              aria-describedby="basic-addon1" 
              onChange={this.doSearch.bind(this)}
              />
          </div>
        </form>
      </nav>;
  }
}

export default connect(
  state => state.searchStore,
  dispatch => bindActionCreators(searchAction, dispatch)
)(Navigation);
