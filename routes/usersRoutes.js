const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/users', (req, res) => {
  res.json({ message: 'List of users' });
});

module.exports = router;