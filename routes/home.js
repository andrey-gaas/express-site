const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Dronito\'s',
    isHomePage: true,
  });
});

module.exports = router;
