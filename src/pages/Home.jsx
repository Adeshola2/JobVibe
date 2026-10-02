import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin, ArrowRight, CheckCircle2, Users, Building2, BriefcaseBusiness } from "lucide-react";
import JobCard from "../components/ui/JobCard";
import { jobs } from "../data/jobs";

export default function Home() {
  const [q,setQ] = useState(""); 
  const [location,setLocation] = useState(""); 
  const nav=useNavigate();
  const search = e => { e.preventDefault(); 
  nav(`/search?q=${encodeURIComponent(q)}&location=${encodeURIComponent(location)}`); };
  return <div>
    <section className="overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gold">Your next opportunity starts here</p>
          <h1 className="text-5xl font-black leading-[1.05] sm:text-7xl">Find work that <span className="text-gold">fits your vibe.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">Discover meaningful jobs from growing companies, apply with confidence, and track every application in one place.</p>
          <form onSubmit={search} className="mt-8 rounded-2xl bg-white p-2 text-ink shadow-2xl sm:flex">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search size={20}/>
              <input value={q} onChange={e=>setQ(e.target.value)} className="w-full py-3 outline-none" placeholder="Job title, skill or company"/>
            </div>
            <div className="flex flex-1 items-center gap-3 border-t px-3 sm:border-l sm:border-t-0">
              <MapPin size={20}/>
              <input value={location} onChange={e=>setLocation(e.target.value)} className="w-full py-3 outline-none" placeholder="Location"/>
            </div>
          <button className="btn-primary mt-2 w-full sm:mt-0 sm:w-auto">Search jobs</button>
          </form>
        </div>
        <div className="hidden lg:block"><img src="/images/hero/job-search.svg" alt="People collaborating around a job search interface" className="mx-auto max-h-[420px] w-full"/></div>
      </div>
    </section>

    <section className="container-page py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Fresh opportunities</p>
          <h2 className="section-title mt-2">Featured jobs</h2>
        </div>
        <Link to="/jobs" className="hidden items-center gap-2 font-bold text-brand sm:flex">View all <ArrowRight size={18}/></Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">{jobs.slice(0,3).map(j=><JobCard key={j.id} job={j}/>)}
      </div>
    </section>

    <section className="bg-slate-50 py-16 dark:bg-white/[.03]">
     <div className="container-page">
       <div className="grid gap-6 md:grid-cols-3">
         <div className="card p-7"><BriefcaseBusiness className="text-brand"/>
         <h3 className="mt-4 text-xl font-bold">For candidates</h3>
         <p className="mt-2 text-sm text-slate-500">Search, save, apply and track opportunities without losing your place.</p>
       </div>
       <div className="card p-7">
         <Building2 className="text-brand"/>
         <h3 className="mt-4 text-xl font-bold">For employers</h3>
         <p className="mt-2 text-sm text-slate-500">Post roles and review candidate profiles and resumes from one workspace.</p>
       </div>
       <div className="card p-7"><Users className="text-brand"/>
         <h3 className="mt-4 text-xl font-bold">Better matching</h3>
         <p className="mt-2 text-sm text-slate-500">Give hiring teams the context they need to make informed decisions.</p>
       </div>
      </div>
      </div>
    </section>
    <section className="container-page py-16">
      <div className="rounded-3xl bg-brand p-8 text-white sm:p-12">
       <div className="max-w-2xl">
         <CheckCircle2 className="text-gold"/>
         <h2 className="mt-4 text-3xl font-black sm:text-4xl">Ready to make your next move?</h2>
         <p className="mt-3 text-white/80">Create your free JobVibe profile and start exploring opportunities today.</p>
         <Link to="/register" className="mt-6 inline-flex rounded-xl bg-gold px-5 py-3 font-bold text-ink">Create your account</Link>
        </div>
      </div>
    </section>
  </div>;
}