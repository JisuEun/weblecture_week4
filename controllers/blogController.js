const { Post } = require('../models');

// 글 목록 가져오기
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while retrieving posts' });
  }
};

// 글 작성하기
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

// 특정 글 가져오기
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

// 글 수정하기
exports.updatePost = async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (post) {
        await post.update(req.body);
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while updating the post' });
    }
  };

  // 글 삭제하기
exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      await post.destroy();
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while deleting the post' });
    }
  };