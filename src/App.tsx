import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import {
  Home,
  BookOpen,
  Users,
  BookHeart,
  Clock,
  Calendar,
  Footprints,
} from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import MyResourcesPage from './pages/MyResourcesPage';
import OtherProgramsPage from './pages/OtherProgramsPage';
import PrayersPage from './pages/PrayersPage';
import MyJourneyPage from './pages/MyJourneyPage';
import MyFirstStepsPage from './pages/MyFirstStepsPage';
import MyDailyRecoveryPage from './pages/MyDailyRecoveryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex space-x-4">
                <NavLink to="/" className="flex items-center nav-link">
                  <Home className="w-5 h-5 mr-1" />
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/my-journey"
                  className="flex items-center nav-link"
                >
                  <Clock className="w-5 h-5 mr-1" />
                  <span>My Journey</span>
                </NavLink>
                <NavLink
                  to="/my-first-steps"
                  className="flex items-center nav-link"
                >
                  <Footprints className="w-5 h-5 mr-1" />
                  <span>My First Steps</span>
                </NavLink>
                <NavLink
                  to="/my-daily-recovery"
                  className="flex items-center nav-link"
                >
                  <Calendar className="w-5 h-5 mr-1" />
                  <span>My Daily Recovery</span>
                </NavLink>
                <NavLink
                  to="/my-resources"
                  className="flex items-center nav-link"
                >
                  <BookOpen className="w-5 h-5 mr-1" />
                  <span>My Resources</span>
                </NavLink>
                <NavLink
                  to="/other-programs"
                  className="flex items-center nav-link"
                >
                  <Users className="w-5 h-5 mr-1" />
                  <span>12 Step Programs</span>
                </NavLink>
                <NavLink to="/prayers" className="flex items-center nav-link">
                  <BookHeart className="w-5 h-5 mr-1" />
                  <span>Meditations and Prayers</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-resources" element={<MyResourcesPage />} />
            <Route path="/other-programs" element={<OtherProgramsPage />} />
            <Route path="/prayers" element={<PrayersPage />} />
            <Route path="/my-journey" element={<MyJourneyPage />} />
            <Route path="/my-first-steps" element={<MyFirstStepsPage />} />
            <Route
              path="/my-daily-recovery"
              element={<MyDailyRecoveryPage />}
            />
          </Routes>
        </main>

        <footer className="bg-white shadow-sm mt-auto">
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-5 h-5" />
            <p>
              If you're struggling, you're not alone. I hope you can find help
              here.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <p>
              All opinions are my own and should not be used as medical advice.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-4">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} storyofrecovery.com
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
