//POST /api/auth/signup
//POST /api/auth/signin

const router = require('express').Router();

router.route('/auth/signup')
  .post();

router.router('/auth/signin')
  .post();

module.exports = router;