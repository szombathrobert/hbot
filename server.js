const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása a gyökérkönyvtárból
app.use(express.static(path.join(__dirname)));

// Minden egyéb kérést az index.html-re irányítunk (Next.js routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Szerver fut a ${PORT} porton`);
});