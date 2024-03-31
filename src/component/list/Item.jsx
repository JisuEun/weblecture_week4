import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";

const Wrapper = styled.div`
    // 기존 스타일을 유지하면서 display를 flex로 변경합니다.
    display: flex;
    align-items: center; // 세로 중앙 정렬
    width: calc(100% - 32px);
    padding: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const Info = styled.span` // span으로 변경하여 inline 요소로 만듭니다.
    font-size: 14px;
    color: #666;
    margin-right: 12px; // 마진으로 요소 사이 간격 조정
`;

function Item(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <Info>{post.id}</Info>
            <Info>{post.title}</Info>
            <Info>{post.author}</Info>
            <Info>{post.time}</Info>
        </Wrapper>
    );
}

export default Item;
