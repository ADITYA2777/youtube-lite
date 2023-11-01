// import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//   params: {
//     hl: "en",
//     gl: "US",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

//  export const fetchDataFromApi = async(url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`,options)
//     return data
// }

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// Function to make an API request with retries and rate limiting
export const fetchDataFromApi = async (url) => {
  const maxRetries = 5; // Adjust this as needed
  const retryDelay = 1000; // Initial retry delay in milliseconds

  for (let retryCount = 0; retryCount < maxRetries; retryCount++) {
    try {
      const response = await axios.get(`${BASE_URL}/${url}`, options);

      if (response.status === 429) {
        // If you receive a 429 response, it's a rate limit error.
        // Implement an exponential backoff delay before retrying.
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelay * Math.pow(2, retryCount))
        );
        continue; // Retry the request
      }

      if (response.status === 200) {
        // If the response status is 200, the request was successful.
        return response.data;
      }
    } catch (error) {
      // Handle other errors
      console.error("API error:", error.message);
    }
  }

  // If max retries are reached, handle it as needed.
  console.error("Max retries reached, unable to fetch data.");
  throw new Error("Max retries reached");
};
