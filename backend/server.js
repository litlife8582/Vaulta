const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/spotify/playlists', (req, res) => {
  const playlists = [
    { id: 1, name: "Discover Weekly", tracks: 30 },
    { id: 2, name: "Release Radar", tracks: 25 },
    { id: 3, name: "Daily Mix 1", tracks: 50 }
  ];
  
  res.json(playlists);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});