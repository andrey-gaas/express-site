const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Dronito\'s',
    isHomePage: true,
  });
});

app.get('/vapes', (req, res) => {
  res.render('vapes', {
    title: 'Вейпы',
    isVapesPage: true,
  });
});

app.get('/liquids', (req, res) => {
  res.render('liquids', {
    title: 'Жидкости для вейпа',
    isLiquidsPage: true,
  });
});

app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Добавить товар',
    isAddPage: true,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
