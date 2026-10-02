import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SearchResults from "./pages/SearchResults";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import PostJob from "./pages/employer/PostJob";
import ManageJobs from "./pages/employer/ManageJobs";
import Applications from "./pages/employer/Applications";
import CandidateDetails from "./pages/employer/CandidateDetails";
import CompanyProfile from "./pages/employer/CompanyProfile";
import MyApplications from "./pages/candidate/MyApplications";
import SavedJobs from "./pages/candidate/SavedJobs";
import Profile from "./pages/candidate/Profile";
import Resume from "./pages/candidate/Resume";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-ink dark:bg-[#120d16] dark:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/candidate" element={<CandidateDashboard />} />
            <Route path="/candidate/applications" element={<MyApplications />} />
            <Route path="/candidate/saved-jobs" element={<SavedJobs />} />
            <Route path="/candidate/profile" element={<Profile />} />
            <Route path="/candidate/resume" element={<Resume />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/employer/post-job" element={<PostJob />} />
            <Route path="/employer/manage-jobs" element={<ManageJobs />} />
            <Route path="/employer/applications" element={<Applications />} />
            <Route path="/employer/candidates/:id" element={<CandidateDetails />} />
            <Route path="/employer/company" element={<CompanyProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}