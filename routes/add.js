const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить товар',
    isAddPage: true,
  });
});

module.exports = router;
