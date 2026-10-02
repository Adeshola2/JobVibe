import Sidebar from "../../components/ui/Sidebar"; 
import { useForm } from "react-hook-form"; 
const items=[
    ["My Applications","/candidate/applications"],
    ["Saved Jobs","/candidate/saved-jobs"],
    ["Profile","/candidate/profile"],
    ["Resume","/candidate/resume"]
]; 
export default function Resume(){
    const {register,handleSubmit}=useForm(); 
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Resume</h1>
                <div className="card mt-7 p-7">
                    <h2 className="text-xl font-bold">Upload your latest resume</h2>
                    <p className="mt-2 text-sm text-slate-500">PDF, DOC or DOCX. Cloudinary can be connected here for production uploads.</p>
                    <form onSubmit={handleSubmit(()=>alert("Resume uploaded successfully"))} className="mt-6 space-y-5">
                        <input className="input" type="file" accept=".pdf,.doc,.docx" {...register("resume",{required:true})}/>
                        <button className="btn-primary">Upload resume</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}