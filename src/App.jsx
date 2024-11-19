import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import global from './styles/global';
import theme from './styles/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Main from './pages/Main';
import Department from './pages/Department';
import DepartmentApply from './pages/DepartmentApply';
import MyPage from './pages/MyPage';
import Bookmark from './pages/Bookmark';
import Applicant from './pages/Applicant';
import Recruit from './pages/Recruit';
import Edit from './pages/Edit';
import TimeTable from './pages/TimeTable';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Header from './component/common/Header/Header';
import Navigation from './component/common/navigation/Navigation';

const GlobalStyle = createGlobalStyle`${global}`;

const Layout = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Outlet />
  </ThemeProvider>
);

const HeaderLayout = () => (
  <>
    <Header />
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/department/:id',
        element: <HeaderLayout />,
        children: [
          { index: true, element: <Department /> },
          { path: 'apply', element: <DepartmentApply /> },
        ],
      },
      {
        path: '/mypage',
        element: <HeaderLayout />,
        children: [
          { index: true, element: <MyPage /> },
          { path: 'bookmark', element: <Bookmark /> },
          { path: 'applicant', element: <Applicant /> },
          { path: 'recruit', element: <Recruit /> },
          { path: 'edit', element: <Edit /> },
          { path: 'timetable', element: <TimeTable /> },
        ],
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
