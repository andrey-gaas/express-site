const { Router } = require('express');
const Vape = require('../model/vape');

const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить товар',
    isAddPage: true,
  });
});

router.post('/', async (req, res) => {
  const vape = new Vape(
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.image,
  );

  await vape.save();

  res.redirect('/');
});

module.exports = router;
