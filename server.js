const express = require('express');
const cors = require('cors');
const { sequelize, Post } = require('./models'); // Post 모델을 임포트
const blogRoutes = require('./routes/blogRoutes'); // 라우트 모듈 임포트

const app = express();
app.use(express.json()); // JSON 요청 본문을 파싱하기 위함

// CORS 설정: 3001번 포트에서 오는 요청만 허용
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001; // 서버의 포트를 3001로 설정

// 데이터베이스 연결 확인
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// 블로그 라우트를 사용합니다.
app.use('/rest-api', blogRoutes);

// 서버 시작
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));