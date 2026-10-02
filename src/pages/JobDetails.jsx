import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { MapPin, BriefcaseBusiness, Clock3 } from "lucide-react";
import { api } from "../lib/api";
import Logo from "../components/ui/Logo";
import { useForm } from "react-hook-form";
export default function JobDetails() {
  const {id}=useParams(); 
  const {data:job,isLoading}=useQuery({queryKey:["job",id],queryFn:()=>api.getJob(id)});
  const {register,handleSubmit}=useForm();
  if(isLoading)return <div className="container-page py-20">Loading job…</div>;
  if(!job)return <div className="container-page py-20">Job not found.</div>;
  const apply=()=>alert("Application submitted. The employer will review your resume.");
  return <section className="container-page py-12">
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div>
        <div className="card p-7 sm:p-10">
          <div className="flex gap-5">
            <Logo initials={job.logo}/>
            <div>
              <p className="text-sm font-semibold text-brand">{job.company}</p>
              <h1 className="mt-1 text-3xl font-black sm:text-4xl">{job.title}</h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><MapPin size={16}/>{job.location}</span>
                <span className="flex items-center gap-1"><BriefcaseBusiness size={16}/>{job.type}</span>
                <span className="flex items-center gap-1"><Clock3 size={16}/>{job.posted}</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">About the role</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{job.description} This role works closely with product, engineering and business teams to deliver measurable outcomes.</p>
            <h2 className="mt-8 text-xl font-bold">Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">{job.skills.map(s=><span key={s} className="rounded-full bg-brand/10 px-3 py-2 text-sm font-semibold text-brand">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
    <aside className="card h-fit p-6"><h2 className="text-xl font-bold">Apply for this job</h2><p className="mt-2 text-sm text-slate-500">Your profile and resume will be shared with the employer for review.</p><form onSubmit={handleSubmit(apply)} className="mt-5 space-y-4"><input className="input" {...register("name")} placeholder="Full name" required/><input className="input" {...register("email")} type="email" placeholder="Email address" required/><input className="input" {...register("resume")} type="file" accept=".pdf,.doc,.docx" required/><button className="btn-primary w-full">Apply now</button></form><Link to="/candidate/resume" className="mt-3 block text-center text-sm font-semibold text-brand">Update your resume first</Link></aside>
  </div>
  </section>;
}