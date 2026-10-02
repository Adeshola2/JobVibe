import { Link } from "react-router-dom"; 
import Sidebar from "../../components/ui/Sidebar"; 
const items=[
    ["Overview","/employer"],
    ["Post Job","/employer/post-job"],
    ["Manage Jobs","/employer/manage-jobs"],
    ["Applications","/employer/applications"],
    ["Company Profile","/employer/company"]
]; 

export default function EmployerDashboard(){
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-black">Employer dashboard</h1>
                        <p className="mt-1 text-slate-500">Manage your hiring pipeline.</p>
                    </div>
                    <Link className="btn-primary" to="/employer/post-job">Post a new job</Link>
                </div>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    {[
                        ["Active jobs", "8"],
                        ["Applications", "124"],
                        ["Shortlisted", "18"]
                    ].map(([a, b]) => (
                        <div className="card p-6" key={a}>
                            <p className="text-sm text-slate-500">{a}</p>
                            <p className="mt-2 text-3xl font-black">{b}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}