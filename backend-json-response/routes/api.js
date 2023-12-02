const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/live-scores', async (req, res) => {
  try {
    // Get the date parameter from the query string (e.g., /api/live-scores?date=2023-11-29)
    const date = req.query.date || '2023-11-29';  // Default to '2023-11-29' if not provided

    const response = await axios.get('https://www.goal.com/api/live-scores/refresh', {
      params: {
        edition: 'en-in',
        date: date,
        tzoffset: 345,
      },
    });
    // console.log(response.json);

    // For simplicity, you can directly send the entire response from the external API
    res.json({"data":response.data});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
