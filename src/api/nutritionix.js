import axios from "axios";

export default axios.create({
  baseURL: "https://api.nutritionix.com",
  headers: {
    "x-app-id": "7d2f3d9a",
    "x-app-key": "60adfab5d0c3b5081382cc568af8b4b7",
  },
});
