import Sidebar from "../../components/ui/Sidebar"; 
import { useForm } from "react-hook-form"; 
import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod";
const schema=z.object({
    title:z.string().min(3),
    company:z.string().min(2),
    location:z.string().min(2),
    category:z.string(),
    description:z.string().min(30),
    salary:z.string().min(2)
});
const items=[
    ["Overview","/employer"],
    ["Post Job","/employer/post-job"],
    ["Manage Jobs","/employer/manage-jobs"],
    ["Applications","/employer/applications"],
    ["Company Profile","/employer/company"]
];
export default function PostJob(){
    const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(schema)});
    return <section className="container-page py-10">
        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
            <Sidebar items={items}/>
            <div>
                <h1 className="text-3xl font-black">Post a job</h1>
                <form onSubmit={handleSubmit(()=>alert("Job published successfully"))} className="card mt-7 grid gap-5 p-7 sm:grid-cols-2">
                    <div>
                        <label className="label">Job title</label>
                        <input className="input" {...register("title")} placeholder="e.g. Senior Frontend Developer"/>
                        {errors.title&&<p className="text-xs text-red-500">Required</p>}
                    </div>
                    <div>
                        <label className="label">Company</label>
                        <input className="input" {...register("company")}/>
                    </div>
                    <div>
                        <label className="label">Location</label>
                        <input className="input" {...register("location")} placeholder="Lagos or Remote"/>
                    </div>
                    <div>
                        <label className="label">Category</label>
                        <select className="input" {...register("category")}>
                            <option>Engineering</option>
                            <option>Design</option>
                            <option>Marketing</option>
                            <option>Data</option>
                            <option>Customer Success</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">Salary range</label>
                        <input className="input" {...register("salary")} placeholder="₦500k – ₦800k"/>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="label">Job description</label>
                        <textarea className="input min-h-44" {...register("description")} placeholder="Describe responsibilities, requirements and benefits..."/>
                    </div>
                    <div className="sm:col-span-2">
                        <button className="btn-primary">Publish job</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    }