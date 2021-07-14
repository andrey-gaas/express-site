const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('vapes', {
    title: 'Вейпы',
    isVapesPage: true,
  });
});

module.exports = router;
