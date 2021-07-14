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

router.get('/:id', async (req, res) => {
  const vape = await Vape.findOneById(req.params.id);

  res.render('vape', {
    title: vape.title,
    vape,
  });
});

module.exports = router;
