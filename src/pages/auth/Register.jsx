import { useForm } from "react-hook-form"; import { z } from "zod"; import { zodResolver } from "@hookform/resolvers/zod"; import { Link, useNavigate } from "react-router-dom";
const schema=z.object(
    {
        name:z.string().min(2,"Enter your name"),
        email:z.string().email("Enter a valid email"),
        password:z.string().min(6,"Use at least 6 characters"),
        role:z.enum(["candidate","employer"])
    });
export default function Register()
{
const nav=useNavigate(); 
const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(schema),defaultValues:{role:"candidate"}}); 
const submit=d=>nav(d.role==="employer"?"/employer":"/candidate"); 
return <section className="container-page flex justify-center py-12">
    <div className="card w-full max-w-lg p-7 sm:p-9">
        <p className="text-sm font-bold text-brand">Create account</p>
        <h1 className="mt-2 text-3xl font-black">Join JobVibe</h1>
        <form onSubmit={handleSubmit(submit)} className="mt-7 space-y-5">
            <div>
                <label className="label">Full name</label>
                <input className="input" {...register("name")}/>
                {errors.name&&<p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div>
                <label className="label">Email</label>
                <input className="input" {...register("email")}/>
                {errors.email&&<p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div>
                <label className="label">Password</label>
                <input type="password" className="input" {...register("password")}/>
                {errors.password&&<p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <div>
                <label className="label">I am joining as</label>
                <select className="input" {...register("role")}>
                    <option value="candidate">Candidate</option>
                    <option value="employer">Employer</option>
                </select>
            </div>
            <button className="btn-primary w-full">Create account</button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">Already registered? <Link className="font-bold text-brand" to="/login">Log in</Link></p>
    </div>
</section>}