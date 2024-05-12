// pages/api/data.js

export default async function handler(req, res) {
    // Retrieve the query parameters from the incoming GET request
    const { query } = req.query;
  
    // Environment variables for the API keys
    const appId = process.env.APP_ID;
    const apiKey = process.env.API_KEY;
  
    console.log(appId,apiKey)
    // Construct the URL for the external API
    const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`;
  
    try {
      // Fetch the data from the external API
      const apiResponse = await fetch(apiUrl);
      if (!apiResponse.ok) {
        // If response from external API is not ok, throw an error
        throw new Error(`Failed to fetch data: ${apiResponse.status}`);
      }
  
      // Convert the response to JSON
      const data = await apiResponse.json();
  
      // Send the data back to the client
      res.status(200).json(data);
    } catch (error) {
      // Handle errors by sending an error status and message to the client
      console.error(error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
  