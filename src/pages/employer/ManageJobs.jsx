import Sidebar from "../../components/ui/Sidebar"; 
import { Link } from "react-router-dom"; 
const items=[
    ["Overview","/employer"],
    ["Post Job","/employer/post-job"],
    ["Manage Jobs","/employer/manage-jobs"],
    ["Applications","/employer/applications"],
    ["Company Profile","/employer/company"]
]; 
const jobs=[
    ["Frontend React Developer","12 applications","Active"],
    ["Product Designer","8 applications","Active"],
    ["Backend Node.js Engineer","21 applications","Paused"]
]; 
export default function ManageJobs(){
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Manage jobs</h1>
                <div className="card mt-7 divide-y divide-slate-200 dark:divide-white/10">
                    {jobs.map(([a,b,c]) => (
                        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between" key={a}>
                            <div>
                                <h2 className="font-bold">{a}</h2>
                                <p className="text-sm text-slate-500">{b}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">{c}</span>
                                <Link to="/employer/applications" className="btn-secondary !px-3 !py-2 text-xs">View applications</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}