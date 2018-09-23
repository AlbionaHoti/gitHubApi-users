
const token = "a7ba2aa41f34db768300edca997aae1c87c2158a"

export async function loadGitHubUsers(since) {
  return fetch(
    `https://api.github.com/users?since=${since}&per_page=5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.github.v3+json",
        "Authorization": "token " + token
      }
    }
  );
}

export async function loadGitHubUser(userId){
  return fetch(`https://api.github.com/users/${userId}`, {
  method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.github.v3+json',
      "Authorization": "token " + token
    }
  })
}
