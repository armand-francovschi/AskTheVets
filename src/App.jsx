import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router and Routes
import './App.css';
import LandingPage from './landing_page/LandingPage';
import BlogPreview from './landing_page/blog_preview/BlogPreview';  // Import BlogPreview
import ChatPage from './tele_vet/chat_page/ChatPage';
import VideoPage from './tele_vet/video_page/VideoPage';
import AudioPage from './tele_vet/audio_page/AudioPage';
// import BlogPage from './/landing_page/blog_page/BlogPage';  // Import BlogPage

function App() {
  return (
    
    <Router>  {/* Wrap the app with Router to enable routing */}
      <Routes>  {/* Define the different routes */}
        <Route path="/" element={<LandingPage />} />  {/* Landing Page */}
        {/* <Route path="/blog" element={<BlogPage />} />  Blog page */}
        <Route path="/blog-preview" element={<BlogPreview />} />  {/* Blog preview page */}
        <Route path="/chat" element={<ChatPage />} />  {/* Chat page */}
        <Route path="/video" element={<VideoPage />} />  {/* Video page */}
        <Route path="/audio" element={<AudioPage />} />  {/* Audio page */}
      </Routes>
    </Router>
  );
}

export default App;
