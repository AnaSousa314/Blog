const {Router} = require('express');
const HomeController = require('../controllers/HomeController');
const NewController = require('../controllers/NewController');
const SearchController = require('../controllers/SearchController');

const router = Router();

router.get('/',HomeController.index);

router.get('/new/:id',NewController.index);

router.get('/search',SearchController.teste);

module.exports = router;