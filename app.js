const express = require('express');
const hbs = require('hbs');

require("./config/dotenv.config");  // Llamo dotenv aquí
require("./config/spotify.config"); // Llamo spotify-api aquí


// Our routes go here:

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
