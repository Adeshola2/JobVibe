import Sidebar from "../../components/ui/Sidebar"; 
import { useForm } from "react-hook-form"; 
const items=[
    ["Overview","/employer"],
    ["Post Job","/employer/post-job"],
    ["Manage Jobs","/employer/manage-jobs"],
    ["Applications","/employer/applications"],
    ["Company Profile","/employer/company"]
]; 

export default function CompanyProfile(){
    const {register,handleSubmit}=useForm({defaultValues:{
        name:"Nova Labs",
        industry:"Technology",
        location:"Lagos, Nigeria",
        about:"Nova Labs is a leading technology company focused on delivering innovative solutions to our clients."
    }}); 
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Company profile</h1>
                <form onSubmit={handleSubmit(()=>alert("Company profile saved"))} className="card mt-7 space-y-5 p-7">
                    <div>
                        <label className="label">Company name</label>
                        <input className="input" {...register("name")}/>
                    </div>
                    <div>
                        <label className="label">Industry</label>
                        <input className="input" {...register("industry")}/>
                    </div>
                    <div>
                        <label className="label">Location</label>
                        <input className="input" {...register("location")}/>
                    </div>
                    <div>
                        <label className="label">About company</label>
                        <textarea className="input min-h-36" {...register("about")} placeholder="Tell candidates about your company"/></div>
                    <button className="btn-primary">Save company</button>
                </form>
            </div>
        </div>
    </section>}