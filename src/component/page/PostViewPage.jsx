import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import data from '../../data.json';
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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const AuthorAndTimeContainer = styled.div`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Author = styled.p`
    font-size: 16px;
    color: black;
    margin: 0;
`;

const DateTime = styled.p`
    font-size: 16px;
    color: grey;
    margin: 0;
`;

const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: grey; /* 구분선 색상 */
    margin: 16px 0; /* 구분선 위아래 여백 */
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%; // 버튼 그룹의 너비를 Container에 맞춤
`;

const LeftButtonGroup = styled.div`
    // 필요한 경우 스타일을 추가할 수 있습니다.
`;

const RightButtonGroup = styled.div`
    display: flex;
    gap: 10px; // 버튼 사이 간격 조정
`;


function PostViewPage(props) {

    const navigate = useNavigate();
    const { postId } = useParams();
    const post = data.find((item) => {
        return item.id == postId;
    });

    return (
        <Wrapper>
            <Container>
                <Header/>
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <AuthorAndTimeContainer>
                        <Author>글쓴이: {post.author}</Author>
                        <DateTime>{post.date} {post.time}</DateTime>
                    </AuthorAndTimeContainer>
                    <Divider /> {/* 구분선 추가 */}
                    <ContentText>{post.content}</ContentText>
                </PostContainer>
                <ButtonGroup>
                <LeftButtonGroup>
                    <Button
                        title='목록으로'
                        onClick={() => {
                            navigate('/');
                        }}
                    />
                </LeftButtonGroup>
                <RightButtonGroup>
                    <Button
                        title='수정'
                        onClick={() => {
                            navigate('/');
                        }}
                    />
                    <Button
                        title='삭제'
                        onClick={() => {
                            navigate('/');
                        }}
                    />
                </RightButtonGroup>
            </ButtonGroup>
                
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
