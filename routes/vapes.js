const { Router } = require('express');
const Vape = require('../model/vape');

const router = Router();

router.get('/', async (req, res) => {
  const vapes = await Vape.getAll();

  res.render('vapes', {
    title: 'Вейпы',
    isVapesPage: true,
    vapes,
  });
});

module.exports = router;
