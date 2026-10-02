import { Link, useParams } from "react-router-dom";
import { companies, jobs } from "../data/jobs";
import Logo from "../components/ui/Logo";
import JobCard from "../components/ui/JobCard";
export default function CompanyDetails(){
    const {id}=useParams(); 
    const c=companies.find(x=>String(x.id)===id); 
    if(!c)return 
    <div className="container-page py-20">Company not found.</div>; 
    return <section className="container-page py-12">
        <div className="card p-8 sm:p-10">
            <div className="flex items-center gap-5">
                <Logo initials={c.logo}/>
                <div>
                    <h1 className="text-4xl font-black">{c.name}</h1>
                    <p className="mt-1 text-slate-500">{c.industry} · {c.location} · {c.employees} employees</p>
                </div>
            </div>
            <p className="mt-7 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">{c.about} We believe great products come from curious teams, clear communication and meaningful ownership.</p>
        </div>
        <div className="mt-10">
            <h2 className="text-2xl font-black">Open roles</h2>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">{jobs.filter(j=>j.company===c.name).map(j=><JobCard key={j.id} job={j}/>)}
            </div>
        </div>
    </section>
}