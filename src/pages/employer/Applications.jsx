import Sidebar from "../../components/ui/Sidebar"; 
import { Link } from "react-router-dom"; 
const items=[
    ["Overview","/employer"],
    ["Post Job","/employer/post-job"],
    ["Manage Jobs","/employer/manage-jobs"],
    ["Applications","/employer/applications"],
    ["Company Profile","/employer/company"]
]; 
const apps=[
    ["Aisha Bello","Frontend React Developer","Under review"],
    ["Daniel Okafor","Frontend React Developer","Shortlisted"],
    ["Ifeoma Nwosu","Product Designer","Interview"]
]; 

export default function Applications(){
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Applications</h1>
                <p className="mt-1 text-slate-500">Review candidate profiles and resumes.</p>
                <div className="card mt-7 overflow-hidden">
                    <div className="divide-y divide-slate-200 dark:divide-white/10">
                        {apps.map(([a,b,c],i)=>
                            <div key={a} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="font-bold">{a}</h2>
                                    <p className="text-sm text-slate-500">{b}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold">{c}</span>
                                    <Link to={`/employer/candidates/${i+1}`} className="btn-secondary !px-3 !py-2 text-xs">Review</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
}