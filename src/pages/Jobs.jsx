import { useState } from "react";
import JobCard from "../components/ui/JobCard";
import PageHero from "../components/ui/PageHero";
import { jobs } from "../data/jobs";
export default function Jobs() {
  const [category,setCategory]=useState("All"); 
  const [location,setLocation]=useState("All");
  const filtered=jobs.filter(j=>(category==="All"||j.category===category)&&(location==="All"||j.location===location));
  const categories=["All",...new Set(jobs.map(j=>j.category))], locations=["All",...new Set(jobs.map(j=>j.location))];
  return <>
  <PageHero eyebrow="Opportunities" title="Find your next job" text="Browse roles from companies hiring across technology, finance, design, marketing and more."/>
  <section className="container-page py-12">
    <div className="mb-8 grid gap-4 sm:grid-cols-2">
      <select className="input" value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(x=><option key={x}>{x}</option>)}</select>
      <select className="input" value={location} onChange={e=>setLocation(e.target.value)}>{locations.map(x=><option key={x}>{x}</option>)}</select>
    </div>
    <p className="mb-5 text-sm text-slate-500">{filtered.length} jobs found</p>
    <div className="grid gap-5 lg:grid-cols-2">{filtered.map(j=><JobCard key={j.id} job={j}/>)}
    </div>
  </section></>;
}