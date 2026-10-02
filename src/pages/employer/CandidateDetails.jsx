import { Link, useParams } from "react-router-dom"; 
import Sidebar from "../../components/ui/Sidebar"; 
const items=[
    ["Overview","/employer"],
    ["Post Job","/employer/post-job"],
    ["Manage Jobs","/employer/manage-jobs"],
    ["Applications","/employer/applications"],
    ["Company Profile","/employer/company"]
]; 
export default function CandidateDetails(){
    const {id}=useParams(); 
return <section className="container-page py-10">
    <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
        <Sidebar items={items}/>
        <div>
            <Link className="text-sm font-bold text-brand" to="/employer/applications">← Back to applications</Link>
            <div className="card mt-5 p-7">
                <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-brand text-xl font-black text-white">AB</div>
                    <div>
                        <h1 className="text-3xl font-black">Candidate #{id}</h1>
                        <p className="text-slate-500">Frontend React Developer applicant</p>
                        </div>
                        </div>
                        <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            <div>
                                <p className="text-xs uppercase text-slate-400">Experience</p>
                                <p className="mt-1 font-semibold">3+ years</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-slate-400">Location</p>
                                    <p className="mt-1 font-semibold">Lagos, Nigeria</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-slate-400">Skills</p>
                                    <p className="mt-1 font-semibold">React · JavaScript · Node.js</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-slate-400">Application status</p>
                                    <p className="mt-1 font-semibold text-brand">Under review</p>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <button className="btn-primary" onClick={()=>alert("Candidate shortlisted")}>
                                    Approve / shortlist
                                </button>
                                <button className="btn-secondary" onClick={()=>alert("Candidate declined")}>
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}