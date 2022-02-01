import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes ,Route, } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import CommentPage from './Components/CommentPage';
import Category from './Components/Category';
import SavedComments from './Components/SavedComments';
import { ProfileProvider } from './Context/ProfileContext';
import { CommentsProvider } from './Context/CommentsContext';
import Profile from './Components/Profile';
import RequireAuth from './Components/PrivateRoute';
import PostShare from './Components/PostShare';
function App() {
  return (
    <CommentsProvider>
      <ProfileProvider>
        <Router>
          <Routes>
            <Route  path="/" element={<Home  />}>
                <Route index element={<CommentPage  />} />
                <Route path="category" element={<Category />} />
                <Route path="saved" element={<SavedComments />}/>
                <Route path="/share" element={
                  <RequireAuth>
                    <PostShare/>
                  </RequireAuth>
                }/>
            </Route>
            <Route  path="/register" element={
              <>
                <Navbar hasContent={false} />
                <RegisterPage/>
              </>
            }/>
            <Route  path="/login" element={
              <>
                <Navbar hasContent={false} />
                <LoginPage/>
              </>
            }/>
            <Route path="/profile" element={
              <RequireAuth>
                <Navbar hasContent={true}/>
                <Profile/>
              </RequireAuth>
            }/>
            
          </Routes>
        </Router>
      </ProfileProvider>
    </CommentsProvider>
  );
}

export default App;
