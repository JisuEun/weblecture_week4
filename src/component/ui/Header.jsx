import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 임포트합니다.


// Header 컨테이너 스타일
const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    background-color: #fff; /* 배경색을 흰색으로 변경 */
    cursor: default; /* 기본 커서 모양으로 설정 */
`;

// 제목 스타일
const Title = styled.h1`
    color: #333; /* 글자색 */
    margin: 0 0 12px 0; /* 마진으로 제목과 이름 사이 간격 조정 */
`;

// 이름 스타일
const Name = styled.div`
    font-size: 16px; /* 글자 크기 */
    color: #333; /* 글자색 */
    text-align: right; /* 오른쪽 정렬 */
    width: 100%; /* 부모 컨테이너의 너비와 같게 */
`;

function Header(props) {
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <HeaderContainer onClick={redirectToHome}>
            <Title>고급 웹 프로그래밍 과제3</Title>
            <Name>컴퓨터학부 2020112037 은지수</Name>
        </HeaderContainer>
    );
}

export default Header;