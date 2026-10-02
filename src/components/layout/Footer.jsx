import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="mt-20 border-t border-slate-200 dark:border-white/10">
    <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div><div className="text-2xl font-black"><span className="text-brand">Job</span>Vibe</div><p className="mt-3 max-w-xs text-sm text-slate-500">A simpler way for people and companies to find the right match.</p></div>
      <div><h3 className="font-bold">Candidates</h3><div className="mt-3 space-y-2 text-sm text-slate-500"><Link className="block" to="/jobs">Find jobs</Link><Link className="block" to="/candidate/saved-jobs">Saved jobs</Link><Link className="block" to="/candidate/resume">Resume</Link></div></div>
      <div><h3 className="font-bold">Employers</h3><div className="mt-3 space-y-2 text-sm text-slate-500"><Link className="block" to="/employer/post-job">Post a job</Link><Link className="block" to="/employer/applications">Applications</Link><Link className="block" to="/employer/company">Company profile</Link></div></div>
      <div><h3 className="font-bold">JobVibe</h3><div className="mt-3 space-y-2 text-sm text-slate-500"><Link className="block" to="/companies">Companies</Link><Link className="block" to="/register">Create account</Link></div></div>
    </div>
    <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500 dark:border-white/10">© 2026 JobVibe. Built for modern hiring.</div>
  </footer>;
}