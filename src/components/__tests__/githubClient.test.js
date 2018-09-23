import * as client from '../githubClient'

const usersMock = [{
    userId: 1,
    login: 'Alb',
    html_url: 'www.example.com',
    name: 'Albiona'
  },
  {
    userId: 2,
    login: 'Albio',
    html_url: 'www.example.com',
    name: 'Albiona'
  },
  {
    userId: 3,
    login: 'Albiona',
    html_url: 'www.example.com',
    name: 'Albiona'
  },
];

it('load github user, return promise', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    usersMock[1]
  ));
  const promise = client.loadGitHubUser(usersMock[1].userId);

  expect(promise).toBeInstanceOf(Promise);
  
});

it('load github user, returns promise with data', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    usersMock[1]
  ));
  const data = await client.loadGitHubUser(usersMock[1].userId);

  expect(data).toEqual(usersMock[1]);
});


it('load github users, returns promise with data', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    usersMock
  ));
  const promise = client.loadGitHubUsers(2);

  expect(promise).toBeInstanceOf(Promise);
});

it('load github users, returns promise with data', async () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
    usersMock
  ));
  const data = await client.loadGitHubUsers(1);

  expect(data).toEqual(usersMock);
});
