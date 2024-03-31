const express = require('express');
const path = require('path');
const { sequelize } = require('./models'); // Post 모델을 임포트
const blogRoutes = require('./routes/blogRoutes'); // 라우트 모듈 임포트

const app = express();
app.use(express.json()); // JSON 요청 본문을 파싱하기 위함

// CORS 설정: 개발 단계에서만 필요하므로 삭제

const PORT = process.env.PORT || 3001; // 서버 포트 설정

// 데이터베이스 연결 확인
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


app.use(express.static(path.join(__dirname, 'client/build')));

// 블로그 라우트 사용
app.use('/rest-api', blogRoutes);

// 모든 요청에 대해 index.html을 제공하도록 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// 서버 시작
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));