export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-webapp.netlify.app/";
const clientId = "b016807208e14d70bebe0af7363d0a94";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const getAccessTokenFromResponse = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const authorize = () => {
 return window.location.href = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("&20")}&response_type=token&show_dialog=true`;

}
