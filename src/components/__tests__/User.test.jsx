import React from "react";
import { shallow } from "enzyme";
import Loading from "../util/loading";
import User from "../user/User";
import * as client from "../githubClient";

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.on("unhandledRejection", e => { return e });

configure({ adapter: new Adapter() });

test("if user is undefined", () => {
  const component = shallow(<User />);

  component.setState({ user: undefined })
  expect(component.find(Loading).length).toBe(1)
});

test("if user is defined", () => {
  const component = shallow(<User user={user}><div /></User>);
  const user = {
    id: 3,
    avatar_url: 'asd',
    login: 'asd',
    url: 'asd',
    html_url: 'asd',
    repos_url: 'asd.com'
  }
  component.setState({ user });
  expect(component
      .find(".card-link")
      .at(1).html()).toBe(`<a href="${user.avatar_url}" class="card-link">Avatar</a>`);
});