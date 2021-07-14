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

router.post('/', async (req, res) => {
  const vape = new Vape(
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.image,
  );

  await vape.save();

  res.redirect('/vapes');
});

router.get('/:id', async (req, res) => {
  const vape = await Vape.findOneById(req.params.id);

  res.render('vape', {
    title: vape.title,
    vape,
  });
});

module.exports = router;
