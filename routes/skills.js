var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/todos"

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
//POST /TODO
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
module.exports = router;
