import Sidebar from "../../components/ui/Sidebar";
import { useForm } from "react-hook-form"; 

const items=[
    ["My Applications","/candidate/applications"],
    ["Saved Jobs","/candidate/saved-jobs"],
    ["Profile","/candidate/profile"],
    ["Resume","/candidate/resume"]
]; 
export default function Profile(){
    const {register,handleSubmit}=useForm({defaultValues:{
        name:"Adeshola John",
        headline:"Full-Stack JavaScript Developer",
        location:"Lagos, Nigeria",
        about:"Passionate full-stack developer with experience in building scalable web applications."
    }}); 
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Profile</h1>
                <form onSubmit={handleSubmit(()=>alert("Profile saved"))} className="card mt-7 space-y-5 p-7">
                    <div>
                        <label className="label">Full name</label>
                        <input className="input" {...register("name")}/>
                        </div>
                        <div>
                            <label className="label">Professional headline</label>
                            <input className="input" {...register("headline")}/>
                            </div>
                            <div>
                                <label className="label">Location</label>
                                <input className="input" {...register("location")}/>
                                </div>
                                <div>
                                    <label className="label">About</label>
                                    <textarea className="input min-h-32" {...register("about")} placeholder="Tell employers about your experience..."/>
                                    </div>
                                    <button className="btn-primary">Save profile</button>
                                    </form>
            </div>
        </div>
   </section>
}