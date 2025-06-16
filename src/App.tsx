import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import LoginComponent from './pages/Login/components/LoginComponent';
import MainPageLayout from './components/Layout/MainPageLayout';
import Error404 from './components/Errors/Error404';
import MapComponent from './pages/Test/MapComponent';
import PricingLandingPage from './pages/PriceLanding/PricingLandingPage';
import TeacherProfile from './pages/TeacherProfile';
import TeachersPage from './pages/TeachersPage';
import CoursesPage from './pages/CoursesPage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  if (isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/my/error" element={<Error404 />} />
        </Routes>
      </Router>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/pricing" element={<PricingLandingPage />} />
        {/* <Route path="/" element={<CommunityLandingPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/test" element={<MapComponent />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/my/" element={<MainPageLayout />}>
          <Route path="error" element={<Error404 />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
