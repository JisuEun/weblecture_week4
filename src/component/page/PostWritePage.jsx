import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import Header from '../ui/Header';
import data from '../../data.json'

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

// 입력 필드를 담는 컨테이너 스타일을 추가합니다.
const InputContainer = styled.div`
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

// 버튼을 오른쪽 하단에 위치시키기 위한 스타일을 추가합니다.
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function PostWritePage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const postId = queryParams.get('postId');
    const isEdit = queryParams.get('edit') === 'true';
    const post = isEdit ? data.find((item) => item.id == postId) : null;

    const [title, setTitle] = useState(post ? post.title : '');
    const [author, setAuthor] = useState(post ? post.author : '');
    const [content, setContent] = useState(post ? post.content : '');

    // 버튼 클릭 시 실행되는 함수
    const handleSubmit = () => {
        // 모든 입력 필드가 채워져 있는지 검사
        if (!title.trim() || !author.trim() || !content.trim()) {
            // 하나라도 비어있다면 경고 메시지를 표시
            alert('모든 필드를 채워주세요!');
        } else {
            // 모두 채워져 있다면, 홈으로 리디렉션
            navigate('/');
        }
    };

    return (
        <Wrapper>
            <Container>
                <Header/>
                <InputContainer>
                    <TextInput
                        height={20}
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </InputContainer>
                
                <InputContainer>
                    <TextInput
                        height={20}
                        placeholder="글쓴이를 입력하세요"
                        value={author}
                        onChange={(event) => {
                            setAuthor(event.target.value);
                        }}
                        fontStyle="italic"
                        color="grey"
                    />
                </InputContainer>

                <InputContainer>
                    <TextInput
                        height={480}
                        placeholder="자유롭게 적어보아요"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                        fontStyle="italic"
                        color="grey"
                    />
                </InputContainer>


                <ButtonContainer>
                    <Button
                        title='글 작성하기'
                        onClick={handleSubmit} // onClick 핸들러를 handleSubmit 함수로 변경
                    />
                </ButtonContainer>
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;