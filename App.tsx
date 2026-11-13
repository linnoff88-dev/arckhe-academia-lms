
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import PlatformHome from './pages/PlatformHome';
import CourseDashboard from './pages/CourseDashboard';
import ModuleView from './pages/ModuleView';
import LessonView from './pages/LessonView';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import ScrollToTop from './components/ScrollToTop';
import SocialHub from './pages/SocialHub';
import ProfilePage from './pages/ProfilePage';
import StorePage from './pages/StorePage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProgressProvider>
        <ThemeProvider>
          <HashRouter>
            <ScrollToTop />
            <div className="min-h-screen bg-slate-50 dark:bg-cyber-bg text-slate-900 dark:text-slate-200 font-sans antialiased relative selection:bg-brand-200 selection:text-brand-900 transition-colors duration-300">
              {/* Background Elements - Efeito "Uau" */}
              <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-200/30 dark:bg-brand-900/20 blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-200/30 dark:bg-accent-900/20 blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-[120px] animate-blob animation-delay-4000"></div>
              </div>

              <Header />
              <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 relative z-10">
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  
                  <Route 
                    path="/" 
                    element={
                      <ProtectedRoute>
                        <PlatformHome />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/profile" 
                    element={
                      <ProtectedRoute>
                        <ProfilePage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/store" 
                    element={
                      <ProtectedRoute>
                        <StorePage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/course/:courseId" 
                    element={
                      <ProtectedRoute>
                        <CourseDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/course/:courseId/module/:moduleId" 
                    element={
                      <ProtectedRoute>
                        <ModuleView />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/course/:courseId/module/:moduleId/lesson/:lessonId" 
                    element={
                      <ProtectedRoute>
                        <LessonView />
                      </ProtectedRoute>
                    } 
                  />
                  <Route
                    path="/social"
                    element={
                      <ProtectedRoute>
                        <SocialHub />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />
                </Routes>
              </main>
            </div>
          </HashRouter>
        </ThemeProvider>
      </ProgressProvider>
    </AuthProvider>
  );
};

export default App;
