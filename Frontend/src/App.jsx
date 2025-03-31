import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router and Routes
import './App.css';
import LandingPage from './landing_page/LandingPage';
import BlogPreview from './landing_page/blog_preview/BlogPreview';  // Import BlogPreview
import ChatPage from './tele_vet/chat_page/ChatPage';
import VideoPage from './tele_vet/video_page/VideoPage';
import AudioPage from './tele_vet/audio_page/AudioPage';
import BlogPage from './blog/BlogPage';
import BlogPostPage from './blog/BlogPostPage';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './user/LoginPage';
import RegisterPage from './user/RegisterPage';
import ArticleManagement from './blog/ArticleManagement';
// import BlogPage from './/landing_page/blog_page/BlogPage';  // Import BlogPage

function App() {
  return (
    <AuthProvider>
      <Router>  {/* Wrap the app with Router to enable routing */}
        <Routes>  {/* Define the different routes */}
          <Route path="/" element={<LandingPage />} />  {/* Landing Page */}
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog-preview" element={<BlogPreview />} />  {/* Blog preview page */}
          <Route path="/blogs/:category/:id" element={<BlogPostPage />} />
          <Route path="/chat" element={<ChatPage />} />  {/* Chat page */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/manage-articles" element={<ArticleManagement/>}/>
          <Route path="/video" element={<VideoPage />} />  {/* Video page */}
          <Route path="/audio" element={<AudioPage />} />  {/* Audio page */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
