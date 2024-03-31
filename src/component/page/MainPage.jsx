import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import List from '../list/List';
import Header from '../ui/Header';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MainPage(props) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    // 컴포넌트가 마운트될 때 서버로부터 게시글 목록을 가져옵니다.
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // 서버 엔드포인트 주소를 업데이트합니다.
                const response = await fetch('http://localhost:3001/rest-api/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data); // 상태를 업데이트합니다.
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, []);
    return (
        <Wrapper>
            <Container>
                <Header/>
                <Button
                    title='새 글 작성'
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />

                <List
                    posts={posts}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
