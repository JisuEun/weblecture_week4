const express = require('express');
const blogController = require('../controllers/blogController'); // 컨트롤러 모듈 임포트

const router = express.Router();

// GET 요청에 대한 라우트, 컨트롤러 함수와 매핑
router.get('/posts', blogController.getPosts);

// POST 요청에 대한 라우트, 컨트롤러 함수와 매핑
router.post('/posts', blogController.createPost);
// 예: router.post('/posts', blogController.createPost);

module.exports = router;