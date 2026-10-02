import { Link } from "react-router-dom"; import Sidebar from "../../components/ui/Sidebar";
const items=[
["My Applications","/candidate/applications"],
["Saved Jobs","/candidate/saved-jobs"],
["Profile","/candidate/profile"],
["Resume","/candidate/resume"]];
export default function CandidateDashboard()
{
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Candidate dashboard</h1>
                <p className="mt-1 text-slate-500">Keep your job search organized.</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">{
                [["Applications","6","/candidate/applications"],
                ["Saved jobs","14","/candidate/saved-jobs"],
                ["Profile views","38","/candidate/profile"]].map(([a,b,t])=><Link key={a} to={t} className="card p-6">
                <p className="text-sm text-slate-500">{a}</p>
                <p className="mt-2 text-3xl font-black">{b}</p>
                </Link>)}</div>
                <div className="card mt-6 p-7">
                 <h2 className="text-xl font-bold">Complete your profile</h2>
                    <p className="mt-2 text-sm text-slate-500">A complete profile helps employers understand your experience faster.</p>
                 <div className="mt-5 h-3 rounded-full bg-slate-100 dark:bg-white/10">
                    <div className="h-3 w-3/4 rounded-full bg-brand"/>
                    </div>
                    <p className="mt-2 text-xs font-semibold text-brand">75% complete</p>
                </div>
            </div>
        </div>
    </section>
}