import Sidebar from "../../components/ui/Sidebar"; 
import JobCard from "../../components/ui/JobCard";
import { jobs } from "../../data/jobs"; 
const items=[
    ["My Applications","/candidate/applications"],
    ["Saved Jobs","/candidate/saved-jobs"],
    ["Profile","/candidate/profile"],
    ["Resume","/candidate/resume"]
]; 
export default function SavedJobs(){
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Saved jobs</h1>
                <div className="mt-7 grid gap-5">
                    {jobs.slice(0,3).map(j=><JobCard key={j.id} job={j}/>)}
                </div>
            </div>
        </div>
    </section>
}