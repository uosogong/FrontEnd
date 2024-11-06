import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>헤더 + 레이아웃</h1>,
      children: [
        { index: true, element: <h1>메인페이지</h1> },
        { path: '/department/:id', element: <h1>부서상세페이지</h1> },
        { path: '/mypage', element: <h1>마이페이지</h1> },
        { path: '/mypage/bookmarks', element: <h1>찜목록</h1> },
        { path: '/mypage/applicant', element: <h1>지원자 리스트</h1> },
      ],
    },
    { path: '/login', element: <h1>로그인</h1> },
    { path: '/signup', element: <h1>회원가입</h1> },
    { path: '/mypage/edit', element: <h1>개인정보수정</h1> },
    { path: '/mypage/timetable', element: <h1>시간표 수정</h1> },
    { path: '/mypage/recruit', element: <h1>교직원용 모집 공고 작성</h1> },
    { path: '/department/:id/apply', element: <h1>부서 지원서 작성</h1> },
    { path: '*', element: <h1>404 처리</h1> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
