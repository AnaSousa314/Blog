const {Router} = require('express');
const HomeController = require('../controllers/HomeController');
const NewController = require('../controllers/NewController');
const router = Router();

router.get('/',HomeController.index);

router.get('/new/:id',NewController.index);

module.exports = router;