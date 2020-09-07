import axios from "axios";

const KEY = "AIzaSyDu-e4Zy9wUfmNWGYrmNurfChwTBxVhrqM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
