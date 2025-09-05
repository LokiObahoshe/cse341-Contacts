const router = require('express').Router();
const controller = require('../controllers/index');

router.get('/', controller.normalRoute);
router.get('/chandra', controller.chandraRoute);
router.get('/rebecca', controller.rebeccaRoute);

router.use('/contacts', require('./contacts'));

module.exports = router;