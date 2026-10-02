import { Link } from "react-router-dom";
import { Bookmark, MapPin, BriefcaseBusiness } from "lucide-react";
import Logo from "./Logo";
export default function JobCard({ job }) {
  const save = () => {
    const saved = JSON.parse(localStorage.getItem("jobvibe-saved") || "[]");
    const next = saved.includes(job.id) ? saved.filter(id => id !== job.id) : [...saved, job.id];
    localStorage.setItem("jobvibe-saved", JSON.stringify(next));
  };
  return <article className="card p-5 transition hover:-translate-y-1 hover:shadow-xl">
    <div className="flex items-start gap-4"><Logo initials={job.logo}/><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><div><Link to={`/jobs/${job.id}`} className="text-lg font-bold hover:text-brand">{job.title}</Link><p className="mt-1 text-sm text-slate-500">{job.company}</p></div><button onClick={save} aria-label="Save job" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10"><Bookmark size={18}/></button></div></div></div>
    <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><MapPin size={14}/>{job.location}</span><span className="inline-flex items-center gap-1"><BriefcaseBusiness size={14}/>{job.type}</span><span>{job.salary}</span></div>
    <div className="mt-4 flex flex-wrap gap-2">{job.skills.map(s => <span key={s} className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{s}</span>)}</div>
    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{job.description}</p>
    <p className="mt-4 text-xs text-slate-400">{job.posted}</p>
  </article>;
}