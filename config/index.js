// const MONGO_URI = process.env.MONGO_URI;
// const SECRET_OR_KEY = process.env.SECRET_OR_KEY;
// const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
// const SPOTIFY_REDIRECT = process.env.SPOTIFY_REDIRECT;
// const SPOTIFY_STATE_KEY = process.env.SPOTIFY_STATE_KEY;
// const SPOTIFY_API_TOKEN = process.env.SPOTIFY_API_TOKEN;
//
// module.exports = {
// 	MONGO_URI,
// 	SECRET_OR_KEY,
// 	SPOTIFY_CLIENT_ID,
// 	SPOTIFY_CLIENT_SECRET,
// 	SPOTIFY_REDIRECT,
// 	SPOTIFY_STATE_KEY,
// 	SPOTIFY_API_TOKEN
// };

const MONGO_URI = "mongodb+srv://andymina:incorrect@master-oxjle.mongodb.net/test?retryWrites=true&w=majority";
const SECRET_OR_KEY = "secret";
const SPOTIFY_CLIENT_ID = "8dfd3782d06b4e9d8b19a0043704aa36";
const SPOTIFY_CLIENT_SECRET = "b2820f809dc54ceda741265c726e0c79";
const SPOTIFY_REDIRECT = "http://localhost:5000/api/spotify/callback";
const SPOTIFY_STATE_KEY = "spotify_auth_state";
const SPOTIFY_API_TOKEN = Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64');

module.exports = {
	MONGO_URI,
	SECRET_OR_KEY,
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REDIRECT,
	SPOTIFY_STATE_KEY,
	SPOTIFY_API_TOKEN
};
