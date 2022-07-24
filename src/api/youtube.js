import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDp8lhgyPhqToMX7KiXAO03j2YyqBH91-Y",
  },
});
