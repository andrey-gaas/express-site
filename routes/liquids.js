const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('liquids', {
    title: 'Жидкости для вейпа',
    isLiquidsPage: true,
  });
});

module.exports = router;
