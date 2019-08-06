import axios from 'axios';

const KEY = 'AIzaSyDwaXe1Jn6STt5B29wEWCwd6uuEoerMo2E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});