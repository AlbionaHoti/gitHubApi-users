import React, { Component } from "react";
import { connect } from "react-redux";
import { loadGitHubUsers } from '../githubClient';
import Loading from "../util/loading";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      since: 0,
      hasMoreUsers: true,
      users: []
    };
  }

  appendUsers(users) {
    this.setState({
      users: this.state.users.concat(users),
      since: users[users.length - 1].id
    });
  }

  showMoreUsers() {
    this.setState({ since: this.state.since + 5 }, () => this.loadUsers());
  }

  async loadUsers() {
    const response = await loadGitHubUsers(this.state.since)

    const json = await response.json();

    this.appendUsers(json);
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const users = this.state.users

    if (!users.length) { return <Loading />}

    return (
    <div className="container text-center p-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col-5">Avatar</th>
            <th scope="col-5">Login</th>
            <th scope="col-5">Details</th>
          </tr>
        </thead>
        <tbody>
        {users
          .filter(
            user =>
              !this.props.text
                ? true
                : user.login.startsWith(this.props.text)
          )
          .map(user => (
                <tr key={user.id} >
                  <th>
                    <img className="card-img-top img-thumbnail" src={user.avatar_url} alt="bla" />
                  </th>
                  <td className="col text-uppercase">{user.login}</td>
                  <th className="col">
                    <a
                      type="button"
                      href={`/users/${user.login}`}
                      className="btn btn-light"
                    >
                      Profile
                    </a>
                  </th>
                </tr>
          ))}
          </tbody>
      </table>
        {
          this.state.hasMoreUsers ?

          <div className="text-center">
            <span className="btn btn-light" style={{ marginTop: "1.5rem" }} onClick={this.showMoreUsers.bind(this)}>
              {" "}
              Show More
            </span>
          </div> : 
          null
        }
    </div>
    )
  }
}

export default connect(
  state => state.searchStore
)(ListUsers);
