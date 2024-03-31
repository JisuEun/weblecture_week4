const { Post } = require('../models');

// 모든 게시글 가져오기
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while retrieving posts' });
  }
};

// 새 글 작성하기
exports.createPost = async (req, res) => {
    try {
      const { title, author, content } = req.body;
      const newPost = await Post.create({ title, author, content });
      res.status(201).json(newPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while creating the post' });
    }
  };

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
        return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while retrieving the post' });
    }
};

// 예: exports.createPost, exports.getPost, exports.updatePost, exports.deletePost 등