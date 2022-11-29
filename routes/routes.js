const express = require('express');
const router = new express.Router();

const ITEMS = require('../fakeDb');


/** GET / => [item, ...] */

router.get('/', (req, res, next) => {
  return res.send('test')
  // return next
});

router.get('/items', (req, res, next) => {
  return res.json({items: ITEMS})
  // return next
});

router.post('/postitems', (req, res, next) => {
  let addItem = new (req.body.name, reg.body.price)
  res.json({item: addItem})
  return res.json({ items: ITEMS })
  // return next
});


// /** GET /[name] => item */

// router.get('/:name', (req, res, next) => {
//   try {
//     let foundItem = Item.find(req.params.name);
//     return res.json({item:foundItem});
//   } catch(err){
//     return next(err)
//   }
// });

// /** PATCH /[name] => item */

// router.patch('/:name', (req, res, next) => {
//   try {
//     let foundItem = Item.update(req.params.name, req.body);
//     return res.json({ item: foundItem });
//   } catch (err) {
//     return next(err)
//   }
// });

// /** DELETE /[name] => "Removed" */

// router.delete('/:name', (req, res, next) => {
//   try {
//     Item.remove(req.params.name);
//     return res.json({message:'Deleted'});
//   } catch (err) {
//     return next(err)
//   }
// });

module.exports = router;