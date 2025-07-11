const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/nse/get_market_data', async (req, res) => {
  try {
    // NSE data endpoint - this is an unofficial endpoint and may change
    const response = await axios.get('https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20500');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching NSE data:', error);
    res.status(500).json({ error: 'Failed to fetch data from NSE' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
