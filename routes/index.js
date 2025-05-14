const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello world'); });
router.get('/algo', (req, res) => { res.send('Hello algo'); });

module.exports = router;