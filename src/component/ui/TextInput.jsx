import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #ccc; /* 경계선 스타일 추가 */
    border-radius: 4px; /* 약간 둥근 모서리 */
    &:focus {
        outline: none; /* 포커스 시 아웃라인 제거 */
        border-color: #000; /* 포커스 시 경계선 색 변경 */
    }
    &::placeholder {
        color: #ccc; /* placeholder 텍스트 색상 */
        font-style: italic; /* placeholder 텍스트 기울임체 */
    }
`;

function TextInput(props) {
    const { height, value, onChange, placeholder } = props;

    return (
        <StyledTextarea
            height={height}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default TextInput;
