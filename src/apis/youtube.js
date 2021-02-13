import axios from "axios";
const KEY = "AIzaSyAbJ0jO3ElpEaabXlS13w-sZFtWvVB7RN4";

const youtube = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    type: "video",
    maxResults: 5,
  },
});
export default youtube;
