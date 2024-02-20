document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.querySelector('#profile-avatar');
  const name = document.querySelector('#profile-name');
  const username = document.querySelector('#profile-username');
  const numberRepos = document.querySelector('#profile-repos');
  const numberFollowers = document.querySelector('#profile-followers');
  const numberFollowing = document.querySelector('#profile-following');
  const link = document.querySelector('#profile-link')

  fetch('https://api.github.com/users/HenriqueGPinho')
    .then(function (r) {
      return r.json();
    })
    .then(function (json) {
      avatar.src = json.avatar_url;
      name.innerText = json.name;
      username.innerText = json.login;
      numberRepos.innerText = json.public_repos;
      numberFollowers.innerText = json.followers;
      numberFollowing.innerText = json.following;
      link.href = json.html_url;
    });
});