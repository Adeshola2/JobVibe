import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Logo from "../components/ui/Logo";
import { companies } from "../data/jobs";
export default function Companies(){
return <><PageHero eyebrow="Explore employers" title="Companies hiring on JobVibe" text="Learn about teams, industries and open opportunities."/>
<section className="container-page grid gap-5 py-12 md:grid-cols-2">{companies.map(c=><Link key={c.id} to={`/companies/${c.id}`} className="card p-6 transition hover:-translate-y-1">
<div className="flex gap-4">
    <Logo initials={c.logo}/>
    <div>
        <h2 className="text-xl font-bold">{c.name}</h2>
        <p className="text-sm text-slate-500">{c.industry} · {c.location}</p>
    </div>
    </div>
    <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">{c.about}</p>
    <p className="mt-4 text-sm font-bold text-brand">{c.jobs} open roles</p>
    </Link>)}
    </section></>
    };