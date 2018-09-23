import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Loading from '../util/loading';
import { loadGitHubUser } from '../githubClient';

class User extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    }
  }
  
  async componentDidMount() {
    const userId = this.props.match.params.name;
    const response = await loadGitHubUser(userId)

    const json = await response.json()
    this.setState({ user: json })
  }

  render() {
    const { user } = this.state

    if(!user) {
      return <Loading />
    }

    return (
      
       <div className="container">
        <Panel className="border m-5">
          <a href={"/"} type="button" className="btn btn-outline-info btn-small m-5">
          <i className="fas fa-chevron-left" />
            {" Back to list"}
          </a>
          <div className="card w-50 m-5">
            <img className="card-img-top" src={user.avatar_url} alt="bla" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold text-secondary">Login: {user.login}</h5>
              <p className="card-text text-primary">
                <a href={user.repos_url} className="card-link">
                  Repositories url
                </a>
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">ID: {user.id}</li>
              <li className="list-group-item text-primary">
                <a href={user.avatar_url} className="card-link">
                  Avatar
                </a>
              </li>
              <li className="list-group-item text-primary">
                <a href={user.url} className="card-link">
                  Html url
                </a>
              </li>
            </ul>
            <div className="card-body">
              <a href={user.html_url} className="card-link">
                GitHub Profile
              </a>
            </div>
          </div>       
        </Panel>
      </div>
    )
  }
}

export default User;