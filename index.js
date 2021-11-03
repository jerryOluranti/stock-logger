const express = require('express');

const app = express();

app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});