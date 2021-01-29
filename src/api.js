const clientid = '5c5132a7eec2412e846544dc0003d61e';
const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = window.location.href;
const scopes = ['user-read-currently-playing', 'user-read-recently-played'];

//this is basically a very very long url nothing more so Im using variables to create the url and compartmentalize it
const loginUrl = `${authEndpoint}?client_id=${clientid}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true&redirect_uri=${redirectUri}`;
export default loginUrl;
// Other ways of fetching instead of using axios on App.js:

// fetch('https://api.spotify.com/v1/me', {
// 	headers: { Authorization: 'Bearer ' + access_token },
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));
// // const _token = hash.access_token; //
// if (_token)  {
// 	setToken(_token);
// }
// console.log(token);
