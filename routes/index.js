const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Contacts Assignment: add "/contacts" to the end of link to see contact list.']
    res.send('Contacts Assignment: add "/contacts" to the end of link to see contact list.');
});

router.use('/contacts', require('./contacts'));

module.exports = router;