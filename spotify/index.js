const { default: axios } = require('axios');

/**
 * Test if a given uri is a valid spotify song
 * @param {string} uri
 * @returns {Promise<[(boolean|null), (Error|null)]>}
 * @example const [valid, err ] = await isValidSpotifyURI('myuri')
 */
const isValidSpotifyURI = async (uri) => {
  try {
    const { data, status } = await axios.get(uri);

    if (!status === 200 || !data.includes('content="Spotify"')) {
      console.log('Submission NOT a valid Spotify link');
      return false, null;
    }

    return true, null;
  } catch (err) {
    return null, err;
  }
};

module.exports = isValidSpotifyURI;
