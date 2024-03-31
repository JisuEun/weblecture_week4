const express = require('express');
const blogController = require('../controllers/blogController'); // 컨트롤러 모듈 임포트

const router = express.Router();

// GET 요청에 대한 라우트, 컨트롤러 함수와 매핑
router.get('/posts', blogController.getPosts);

// POST 요청에 대한 라우트, 컨트롤러 함수와 매핑
router.post('/posts', blogController.createPost);
// 예: router.post('/posts', blogController.createPost);

router.get('/posts/:id', blogController.getPost); // 특정 게시글 가져오기

router.delete('/posts/:id', blogController.deletePost); // 특정 게시글 삭제

module.exports = router;