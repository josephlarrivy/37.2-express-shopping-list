const express = require('express');
const router = new express.Router();
// const Item = require('../item');

let ITEMS = require('../fakeDb');
// ITEMS = []

// ###################


router.get('/', (req, res, next) => {
  return res.json('test - home')
  // return next
});

router.get('/items', (req, res, next) => {
  return res.json({items: ITEMS})
  // return next
});

router.post('/postitems/:name/:price', (req, res, next) => {
  paramters = req.params
  let item_name = req.params.name;
  let item_price = req.params.price
  ITEMS.push({'item_name': item_name, 'item_price': item_price})

  return res.json(ITEMS)
});


router.get('/find/:name', (req, res, next) => {
  const find = ITEMS.find(item => item.item_name == req.params.name)
  return res.send(find)
});

router.patch('/change/:name/:change', (req, res, next) => {
  const find = ITEMS.find(item => item.item_name == req.params.name)
  const update = find.update({ 'item_name': req.params.change, 'item_price': find.item_price })

});

router.delete('/delete/:name', (req, res, next) => {
  const find = ITEMS.find(item => item.item_name == req.params.name)
  find.delete()
  return res.json(find)
});

module.exports = router;