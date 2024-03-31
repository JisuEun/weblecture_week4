import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    height: 40px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 20px;
    cursor: pointer;
    background-color: white; /* 기본 배경색을 흰색으로 설정 */
    color: black; /* 기본 글자색을 검은색으로 설정 */
    border-color: black; /* 테두리 색상을 검은색으로 설정 */
    transition: background-color 0.3s, color 0.3s; /* 배경색과 글자색 변경에 대한 애니메이션 적용 */

    &:hover {
        background-color: black; /* 마우스 오버 시 배경색을 검은색으로 */
        color: white; /* 마우스 오버 시 글자색을 흰색으로 */
    }

    &:focus {
        outline: none; // 포커스가 됐을 때 아웃라인을 제거합니다.
      }
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;