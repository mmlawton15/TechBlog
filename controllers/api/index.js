//collects the api routes
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes.js')
const postRoutes = require('./post-routes.js')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;