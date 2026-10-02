import { useForm } from "react-hook-form";
export default function ForgotPassword(){
    
const {register,handleSubmit}=useForm(); 
const submit=()=>alert("If an account exists, a reset link has been sent."); 
return <section className="container-page flex justify-center py-20">
    <div className="card w-full max-w-md p-8">
        <h1 className="text-3xl font-black">Reset your password</h1>
        <p className="mt-2 text-sm text-slate-500">Enter your email and we’ll send password-reset instructions.</p>
        <form onSubmit={handleSubmit(submit)} className="mt-6 space-y-4">
            <input className="input" type="email" required {...register("email")} placeholder="you@example.com"/>
            <button className="btn-primary w-full">Send reset link</button>
        </form>
    </div>
</section>}