import React, { useState } from 'react';
import styled from 'styled-components';
import Item from './Item';
import Pagination from 'react-js-pagination';

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬을 위해 변경 */
  justify-content: center;
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  list-style: none;
  justify-content: center; /* 가로 정렬을 위해 변경 */
  padding-left: 0; /* 기본 패딩 제거 */
  
  li {
    margin: 0 5px; /* 좌우 여백 추가 */
    a {
      text-decoration: none;
      color: black; /* 기본 글자색을 검은색으로 설정 */
      font-size: 15px; /* 폰트 크기 조정 */
      
      &:hover {
        color: blue; /* 호버 시 색상 변경 */
      }
      &:focus {
        outline: none; /* 포커스 시 아웃라인 제거 */
      }
    }
  }

  li.active a {
    color: black; /* 활성 페이지 글자 색상을 검은색으로 변경 */
    background-color: grey; /* 활성 페이지 배경색을 회색으로 변경 */
    padding: 5px 10px; /* 패딩 추가 */
    border-radius: 5px; /* 모서리 둥글게 */
  }
`;

function List(props) {
  const { posts, onClickItem } = props;

  // 페이지네이션을 위한 상태 설정
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;
  const totalItemsCount = posts.length;
  const indexOfLastPost = activePage * itemsCountPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsCountPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <Wrapper>
      {currentPosts.map((post) => (
        <Item key={post.id} post={post} onClick={() => onClickItem(post)} />
      ))}
      <StyledPagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </Wrapper>
  );
}

export default List;